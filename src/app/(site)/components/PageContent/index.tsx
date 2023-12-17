'use client'

import React from 'react'

import { Search } from '../Search'
import { OrderBy } from '../OrderBy'

import { ListCountries } from '../ListCountries'
import { PageProvider } from '../../context/PageProvider'
import type { Country } from '@/@types/country'

type PropsType = {
  data: Country[]
}

export const PageContent = ({ data }: PropsType) => {
  return (
    <PageProvider data={data}>
      <section className='py-6'>
        <div className='flex items-center justify-between'>
          <Search />

          <OrderBy />
        </div>
      </section>

      <section className='py-6'>
        <ListCountries />
      </section>
    </PageProvider>
  )
}
