import { render, screen, waitFor } from '@testing-library/react'

import { Card } from '.'

describe('Card Component', () => {
  const card = {
    flags: {
      png: 'https://flagcdn.com/w320/br.png',
      svg: 'https://flagcdn.com/cx.svg',
      alt: '',
    },
    name: {
      common: 'Brazil',
      official: '',
    },
    population: 212559409,
    capital: ['Brasília'],
    region: 'Americas',
  }

  it('should have name, population, region and capital', () => {
    render(<Card card={card} />)

    screen.getAllByRole('img')
    screen.getAllByRole('heading')
    screen.getByText(/population/i)
    screen.getByText(/region/i)
    screen.getByText(/capital/i)
  })

  it('should have src', async () => {
    render(<Card card={card} />)

    const img = screen.getByRole('img') as HTMLImageElement

    await waitFor(() => {
      expect(img.getAttribute('src')).toEqual(card.flags.svg)
    })
  })
})
