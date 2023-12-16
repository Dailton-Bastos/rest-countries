import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { OrderBy } from '.'
import '@testing-library/jest-dom'

describe('OrderBy Component', () => {
  const orderBy = () => {}
  const removeFilter = () => {}

  void it('should render Menu on button click', () => {
    render(
      <OrderBy
        orderBy={orderBy}
        selected='americas'
        removeFilter={removeFilter}
      />
    )

    const button = screen.getByTestId('button-dropdown')

    fireEvent.click(button)

    const menu = screen.getByTestId('menu-dropdown')

    expect(menu).not.toBeNull()
  })

  it('should show current order name after select filter', () => {
    render(
      <OrderBy
        orderBy={orderBy}
        selected='africa'
        removeFilter={removeFilter}
      />
    )

    const buttonOpenMenu = screen.getByTestId('button-dropdown')

    fireEvent.click(buttonOpenMenu)

    const buttonSelectFilter = screen.getByTestId('button-order-africa')

    fireEvent.click(buttonSelectFilter)

    const selected = screen.getByTestId('selected-order')

    expect(selected).toBeInTheDocument()
  })
})
