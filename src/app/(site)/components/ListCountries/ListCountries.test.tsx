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

  const totalCountries = 8

  const onNextPage = () => {}

  it('should render Cards list', () => {
    render(
      <ListCountries
        data={data}
        totalCountries={totalCountries}
        onNextPage={onNextPage}
        hasMore
      />
    )

    screen.getByText(/christmas island/i)
  })

  it('should render Loading component on scroll page', () => {
    render(
      <ListCountries
        data={data}
        totalCountries={totalCountries}
        onNextPage={onNextPage}
        hasMore
      />
    )

    screen.getByText(/loading/i)
  })

  it('should render end message if has no more', () => {
    render(
      <ListCountries
        data={data}
        totalCountries={totalCountries}
        onNextPage={onNextPage}
        hasMore={false}
      />
    )

    screen.getByText(/you have seen it all/i)
  })
})
