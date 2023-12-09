import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '.'

describe('Header Component', () => {
  it('should render Header with Where in the world question', () => {
    render(<Header />)

    screen.getByText('Where in the world?')
  })

  it('should change color mode on button click', () => {
    render(<Header />)

    screen.getByText(/light mode/i)

    const button = screen.getByRole('button')

    fireEvent.click(button)

    screen.getByText(/dark mode/i)
  })
})
