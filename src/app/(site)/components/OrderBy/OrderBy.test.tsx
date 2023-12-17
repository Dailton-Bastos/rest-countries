import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { OrderBy } from '.'
import { countryMock } from '@/mocks'
import { PageContext } from '../../context/PageContext'
import '@testing-library/jest-dom'

describe('OrderBy Component', () => {
  const data = [countryMock]

  const state = {
    data,
    countries: data.slice(0, 8),
    page: 1,
    orderBy: '' as const,
    total: data.length,
    search: {
      isLoading: false,
      value: '',
    },
  }

  const dispatch = jest.fn()

  void it('should render Menu on button click', () => {
    render(
      <PageContext.Provider value={{ state, dispatch }}>
        <OrderBy />
      </PageContext.Provider>
    )

    const button = screen.getByTestId('button-dropdown')

    fireEvent.click(button)

    const menu = screen.getByTestId('menu-dropdown')

    expect(menu).not.toBeNull()
  })

  // it('should show current order name after select filter', () => {
  //   render(
  //     <PageContext.Provider value={{ state, dispatch }}>
  //       <OrderBy />
  //     </PageContext.Provider>
  //   )

  //   const buttonOpenMenu = screen.getByTestId('button-dropdown')

  //   fireEvent.click(buttonOpenMenu)

  //   const buttonSelectFilter = screen.getByTestId('button-order-africa')

  //   fireEvent.click(buttonSelectFilter)

  //   const selected = screen.getByTestId('selected-order')

  //   expect(selected).toBeInTheDocument()
  // })
})
