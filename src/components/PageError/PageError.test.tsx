import { render, screen } from '@testing-library/react'

import { PageError } from '.'

describe('Error Page', () => {
  it('should render Error Page correctly', () => {
    render(<PageError reset={() => {}} />)

    screen.getByText(/something went wrong\!/i)
  })
})
