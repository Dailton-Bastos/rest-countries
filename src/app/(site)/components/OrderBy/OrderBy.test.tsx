import { render, screen, fireEvent } from '@testing-library/react'

import { OrderBy } from '.'

describe('OrderBy Component', () => {
  it('should render Menu on button click', () => {
    render(<OrderBy />)

    const button = screen.getByTestId('button-dropdown')

    fireEvent.click(button)

    const menu = screen.getByTestId('menu-dropdown')

    expect(menu).not.toBeNull()
  })
})
