import { render, screen, fireEvent } from '@testing-library/react'

import { Search } from '.'

describe('Search Component', () => {
  it('should have a placeholder', () => {
    render(<Search />)

    screen.getByPlaceholderText(/search/i)
  })
})
