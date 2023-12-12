'use client'

import React from 'react'

import { Search } from '../Search'
import { OrderBy } from '../OrderBy'

import type { Country } from '@/@types/country'
import { ListCountries } from '../ListCountries'

type PropsType = {
  data: Country[]
}

const PageSize = 8

export const PageContent = ({ data }: PropsType) => {
  const [countries, setCountries] = React.useState<Country[]>([])

  const [currentPage, setCurrentPage] = React.useState(1)

  const totalCountries = countries.length

  const hasMore = data.length > totalCountries

  const onNextPage = React.useCallback(() => {
    setCurrentPage((prev) => prev + 1)
  }, [])

  React.useEffect(() => {
    const firstPageIndex = currentPage * PageSize

    setCountries(data.slice(0, firstPageIndex))
  }, [currentPage, data])

  return (
    <React.Fragment>
      <section className='py-6'>
        <div className='flex items-center justify-between'>
          <Search />

          <OrderBy />
        </div>
      </section>

      <section className='py-6'>
        <ListCountries
          data={countries}
          totalCountries={totalCountries}
          hasMore={hasMore}
          onNextPage={onNextPage}
        />
      </section>
    </React.Fragment>
  )
}
