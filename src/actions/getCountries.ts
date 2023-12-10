'use server'

import type { Country } from '@/@types/country'

export const getCountries = async (): Promise<Country[]> => {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all')

    if (!res.ok) {
      return []
    }

    return res.json()
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}
