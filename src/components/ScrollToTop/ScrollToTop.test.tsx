import { render, screen, fireEvent } from '@testing-library/react'

import { ScrollToTop } from '.'

describe('ScrollToTop Component', () => {
  it('should render ScrollToTop if window scroll bigger then 400', () => {
    let scrolled = false

    render(<ScrollToTop />)

    window.addEventListener('scroll', () => (scrolled = !scrolled), false)

    fireEvent.scroll(window, { target: { scrollY: 410 } })

    expect(screen.getByRole('button'))
    expect(scrolled).toBeTruthy()
  })
})
