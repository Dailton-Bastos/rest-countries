import { render, screen } from '@testing-library/react'

import { ListCountries } from '.'
import { PageContext } from '../../context/PageContext'
import { countryMock } from '@/mocks'

import '@testing-library/jest-dom'

describe('List Countries Component', () => {
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

  it('should render Cards list', () => {
    render(
      <PageContext.Provider value={{ state, dispatch }}>
        <ListCountries />
      </PageContext.Provider>
    )

    screen.getByText(/eritrea/i)
  })

  // it('should render Loading component on scroll page', () => {
  //   render(
  //     <PageContext.Provider value={{ state, dispatch }}>
  //       <ListCountries />
  //     </PageContext.Provider>
  //   )

  //   screen.getByText(/loading/i)
  // })

  it('should render end message if has no more', () => {
    render(
      <PageContext.Provider value={{ state, dispatch }}>
        <ListCountries />
      </PageContext.Provider>
    )

    screen.getByText(/you have seen it all/i)
  })
})
