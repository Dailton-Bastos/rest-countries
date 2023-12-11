import { render, screen } from '@testing-library/react'

import { countryMock } from '@/mocks'

import Page from './page'

describe('Home page', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.doMock()
    jest.useFakeTimers()
  })

  afterEach(() => jest.useRealTimers())

  it('should fetch and renders countries content', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([countryMock]), {
      status: 200,
    })

    render(await Page())

    screen.getByText(/eritrea/i)
  })
})
