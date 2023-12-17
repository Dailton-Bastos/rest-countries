'use server'

import { cache } from 'react'

import type { Country } from '@/@types/country'

export const getCountryByName = cache(
  async (name: string): Promise<Country[]> => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=flags,name,population,region,subregion,capital,currencies,languages,tld,latlng`
      )

      if (!res.ok) {
        return []
      }

      return res.json()
    } catch (error) {
      throw new Error('Failed to fetch data')
    }
  }
)
