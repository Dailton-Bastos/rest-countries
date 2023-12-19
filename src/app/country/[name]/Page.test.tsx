import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { countryMock } from '@/mocks'

import Page from './page'

describe('Country page', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
    fetchMock.doMock()
    jest.useFakeTimers()

    fetchMock.mockResponseOnce(JSON.stringify([countryMock]), {
      status: 200,
    })
  })

  afterEach(() => jest.useRealTimers())

  it('should fetch and render country content', async () => {
    await act(async () => render(await Page({ params: { name: 'Eritrea' } })))

    expect(screen.findAllByText(/eritrea/i))
  })
})
