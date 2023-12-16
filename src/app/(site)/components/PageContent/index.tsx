'use client'

import React from 'react'
import { useImmerReducer } from 'use-immer'

import { Search } from '../Search'
import { OrderBy } from '../OrderBy'

import type { Country } from '@/@types/country'
import { ListCountries } from '../ListCountries'
import { countriesReducer } from '@/redurcers/countries'
import type { OrderByType } from '@/@types'

type PropsType = {
  data: Country[]
}

export const PageContent = ({ data }: PropsType) => {
  const initialState = {
    data,
    countries: data.slice(0, 8),
    page: 1,
    orderBy: '' as OrderByType,
    total: data.length,
  }

  const [state, dispatch] = useImmerReducer(countriesReducer, initialState)

  const { countries, total } = state

  const hasMore = total > countries.length
  const dataLength = countries.length

  const onNextPage = React.useCallback(() => {
    dispatch({
      type: 'NEXT_PAGE',
      payload: 1,
    })
  }, [dispatch])

  const orderBy = React.useCallback(
    (payload: OrderByType) => {
      dispatch({
        type: 'ORDER_BY',
        payload,
      })
    },
    [dispatch]
  )

  return (
    <React.Fragment>
      <section className='py-6'>
        <div className='flex items-center justify-between'>
          <Search />

          <OrderBy orderBy={orderBy} />
        </div>
      </section>

      <section className='py-6'>
        <ListCountries
          data={countries}
          dataLength={dataLength}
          hasMore={hasMore}
          onNextPage={onNextPage}
        />
      </section>
    </React.Fragment>
  )
}
