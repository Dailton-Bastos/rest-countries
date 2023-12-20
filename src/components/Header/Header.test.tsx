import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '.'

describe('Header Component', () => {
  it('should render Header with Where in the world question', () => {
    render(<Header />)

    screen.getByText('Where in the world?')
  })
})
