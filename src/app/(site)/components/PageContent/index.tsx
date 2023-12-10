'use client'

import React from 'react'

import { Search } from '../Search'
import { OrderBy } from '../OrderBy'
import { Card } from '../Card'

export const PageContent = () => {
  return (
    <React.Fragment>
      <section className='py-6'>
        <div className='flex items-center justify-between'>
          <Search />

          <OrderBy />
        </div>
      </section>

      <section className='py-6'>
        <ul className='grid grid-cols-4 gap-20'>
          <Card
            card={{
              flag: {
                url: 'https://flagcdn.com/w320/br.png',
                alt: '',
              },
              name: 'Brazil',
              population: 212559409,
              capital: 'Brasília',
              region: 'Americas',
            }}
          />
          <Card
            card={{
              flag: {
                url: 'https://flagcdn.com/w320/ye.png',
                alt: '',
              },
              name: 'Yemen',
              population: 29825968,
              capital: "Sana'a",
              region: 'Asia',
            }}
          />
          <Card
            card={{
              flag: {
                url: 'https://flagcdn.com/w320/br.png',
                alt: '',
              },
              name: 'Brazil',
              population: 212559409,
              capital: 'Brasília',
              region: 'Americas',
            }}
          />
          <Card
            card={{
              flag: {
                url: 'https://flagcdn.com/w320/br.png',
                alt: '',
              },
              name: 'Brazil',
              population: 212559409,
              capital: 'Brasília',
              region: 'Americas',
            }}
          />
        </ul>
      </section>
    </React.Fragment>
  )
}
