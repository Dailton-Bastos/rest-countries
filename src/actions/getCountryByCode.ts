'use server'

import { cache } from 'react'

type CountryByCode = {
  name: {
    common: string
    official: string
  }
}

export const getCountryByCode = cache(
  async (code: string): Promise<CountryByCode> => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}?fields=name`
      )

      if (res.ok) {
        return res.json()
      }

      return {} as CountryByCode
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
)
