import { render, screen } from '@testing-library/react'

import { ListCountries } from '.'

describe('List Countries Component', () => {
  const data = [
    {
      name: {
        common: 'Christmas Island',
        official: 'Territory of Christmas Island',
        nativeName: {
          eng: {
            official: 'Territory of Christmas Island',
            common: 'Christmas Island',
          },
        },
      },
      tld: ['.cx'],
      currencies: {
        AUD: {
          name: 'Australian dollar',
          symbol: '$',
        },
      },
      capital: ['Flying Fish Cove'],
      region: 'Oceania',
      subregion: 'Australia and New Zealand',
      languages: {
        eng: 'English',
      },
      latlng: [-10.5, 105.66666666],
      population: 2072,
      flags: {
        png: 'https://flagcdn.com/w320/cx.png',
        svg: 'https://flagcdn.com/cx.svg',
      },
    },
  ]

  it('should render Cards list', () => {
    render(<ListCountries data={data} />)

    screen.getByText(/christmas island/i)
  })

  it('should show No Countries found message, if card list empty', () => {
    render(<ListCountries data={[]} />)

    screen.getByText(/no countries found/i)
  })
})
