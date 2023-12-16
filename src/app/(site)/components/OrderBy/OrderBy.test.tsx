import { render, screen, fireEvent } from '@testing-library/react'

import { OrderBy } from '.'

describe('OrderBy Component', () => {
  const orderBy = () => {}

  void it('should render Menu on button click', () => {
    render(<OrderBy orderBy={orderBy} />)

    const button = screen.getByTestId('button-dropdown')

    fireEvent.click(button)

    const menu = screen.getByTestId('menu-dropdown')

    expect(menu).not.toBeNull()
  })
})
