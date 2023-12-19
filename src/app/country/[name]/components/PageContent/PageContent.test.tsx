import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import { PageContent } from '.'
import { countryMock } from '@/mocks'

describe('Country page content', () => {
  it('should have go back button', async () => {
    render(<PageContent country={countryMock} />)

    const button = screen.getByTestId('button-go-back')

    await waitFor(() => {
      expect(button).toBeInTheDocument()
    })
  })

  it('should have country flag', async () => {
    render(<PageContent country={countryMock} />)

    await waitFor(() => {
      expect(screen.getByRole('img')).toBeInTheDocument()
    })
  })

  it('should have country name', async () => {
    render(<PageContent country={countryMock} />)

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('Eritrea')
    })
  })
})
