import { render, screen } from '@testing-library/react'

import { LoadingAnimation } from '.'

describe('Error Page', () => {
  it('should have countries flags image', () => {
    render(<LoadingAnimation />)

    const img = screen.getByRole('img') as HTMLImageElement

    expect(img.getAttribute('src')).toEqual(
      '/_next/image?url=%2Fimages%2Fcountries-flags.gif&w=384&q=75'
    )
  })
})
