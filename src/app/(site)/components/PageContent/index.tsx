'use client'

import React from 'react'

import { Search } from '../Search'
import { OrderBy } from '../OrderBy'

import type { Country } from '@/@types/country'
import { ListCountries } from '../ListCountries'

type PropsType = {
  data: Country[]
}

export const PageContent = ({ data }: PropsType) => {
  return (
    <React.Fragment>
      <section className='py-6'>
        <div className='flex items-center justify-between'>
          <Search />

          <OrderBy />
        </div>
      </section>

      <section className='py-6'>
        <ListCountries data={data} />
      </section>
    </React.Fragment>
  )
}
