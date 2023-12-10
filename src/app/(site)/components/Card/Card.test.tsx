import { render, screen } from '@testing-library/react'

import { Card } from '.'

describe('Card Component', () => {
  it('should have Flag, Name, Population, Region and Capital', () => {
    const card = {
      flag: {
        url: 'https://flagcdn.com/w320/br.png',
        alt: '',
      },
      name: 'Brazil',
      population: 212559409,
      capital: 'Brasília',
      region: 'Americas',
    }
    render(<Card card={card} />)

    screen.getAllByRole('img')
    screen.getAllByRole('heading')
    screen.getByText(/population/i)
    screen.getByText(/region/i)
    screen.getByText(/capital/i)
  })
})
