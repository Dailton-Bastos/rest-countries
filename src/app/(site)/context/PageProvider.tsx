'use client'

import React from 'react'

import { PageContext } from './PageContext'
import { useImmerReducer } from 'use-immer'
import { countriesReducer } from '@/redurcers/countries'
import { Country } from '@/@types/country'
import { OrderByType } from '@/@types'

type PropsType = {
  children: React.ReactNode
  data: Country[]
}

export const PageProvider = ({ children, data }: PropsType) => {
  const [state, dispatch] = useImmerReducer(countriesReducer, {
    data,
    countries: data.slice(0, 8),
    page: 1,
    orderBy: '' as OrderByType,
    total: data.length,
    search: {
      isLoading: false,
      // results: [],
      value: '',
    },
  })

  const value = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  )

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}

export const usePageContext = () => {
  const context = React.useContext(PageContext)

  if (!context) {
    throw new Error('usePageContext must be used within a PageProvider')
  }

  return context
}
