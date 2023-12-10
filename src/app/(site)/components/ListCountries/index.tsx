import React from 'react'

import { Card } from '../Card'
import type { Country } from '@/@types/country'

type PropsType = {
  data: Country[]
}

export const ListCountries = ({ data }: PropsType) => {
  if (!data.length) {
    return (
      <p className='text-lg text-center font-semibold'>No countries found</p>
    )
  }

  return (
    <ul className='grid grid-cols-4 gap-20'>
      {data?.map((country) => (
        <Card key={country?.name?.official} card={country} />
      ))}
    </ul>
  )
}
