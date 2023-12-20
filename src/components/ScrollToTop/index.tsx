'use client'

import React from 'react'
import { FaAngleUp } from 'react-icons/fa'

export const ScrollToTop = () => {
  const [showButton, setShowButton] = React.useState(false)

  const handleGoToTop = React.useCallback(() => {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const eventListener = React.useCallback(() => {
    setShowButton(window.scrollY > 400)
  }, [])

  React.useEffect(() => {
    window.addEventListener('scroll', eventListener, false)

    return () => window.removeEventListener('scroll', eventListener, false)
  })

  if (!showButton) return <></>

  return (
    <div className='relative'>
      <button
        aria-label='Go to top page'
        className='
					fixed
					bottom-10
					right-6
					flex
					items-center
					justify-center
					shadow
					bg-white
					w-12
					h-12
					rounded-full
					animate-move-btn-scroll
					hover:shadow-md
					dark:bg-blue-800
				'
        onClick={handleGoToTop}
      >
        <FaAngleUp size={26} />
      </button>
    </div>
  )
}
