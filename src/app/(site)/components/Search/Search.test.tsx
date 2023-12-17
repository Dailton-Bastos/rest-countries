import { render, screen } from '@testing-library/react'

import { Search } from '.'
import { countryMock } from '@/mocks'
import { PageContext } from '../../context/PageContext'

describe('Search Component', () => {
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

  it('should have a placeholder', () => {
    render(
      <PageContext.Provider value={{ state, dispatch }}>
        <Search />
      </PageContext.Provider>
    )

    screen.getByPlaceholderText(/search/i)
  })
})
