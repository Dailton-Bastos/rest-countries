import { enableFetchMocks } from 'jest-fetch-mock'
import type { OrderByType } from '@/@types'

enableFetchMocks()

export const countryMock = {
  name: {
    common: 'Eritrea',
    official: 'State of Eritrea',
  },
  tld: ['.er'],
  currencies: {
    ERN: {
      name: 'Eritrean nakfa',
    },
  },
  capital: ['Asmara'],
  region: 'Africa',
  subregion: 'Eastern Africa',
  languages: {
    ara: 'Arabic',
    eng: 'English',
    tir: 'Tigrinya',
  },
  latlng: [15.0, 39.0],
  population: 5352000,
  flags: {
    png: 'https://flagcdn.com/w320/er.png',
    svg: 'https://flagcdn.com/er.svg',
    alt: 'The flag of Eritrea comprises three triangles — a large red isosceles triangle with its base spanning the hoist end and its apex at the midpoint on the fly end, and a green and blue right-angled triangle above and beneath the red triangle. On the hoist side of the red triangle is a golden vertical olive branch encircled by a golden olive wreath.',
  },
  independent: true,
  borders: ['DJI', 'ETH', 'SDN'],
}

export const orderByMock: Array<{
  name: string
  orderBy: OrderByType
}> = [
  {
    name: 'Africa',
    orderBy: 'africa',
  },
  {
    name: 'America',
    orderBy: 'americas',
  },
  {
    name: 'Asia',
    orderBy: 'asia',
  },
  {
    name: 'Europe',
    orderBy: 'europe',
  },
  {
    name: 'Oceania',
    orderBy: 'oceania',
  },
]
