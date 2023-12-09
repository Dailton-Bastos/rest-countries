'use client'

import React from 'react'
import { IoMoonOutline } from 'react-icons/io5'

export const Header = () => {
  const [mode, setMode] = React.useState('Light Mode')

  return (
    <header className='bg-white shadow-sm fixed top-0 left-0 w-full'>
      <div
        className='
				flex
				items-center
				justify-between
				max-w-[1440px]
				mx-auto
				py-6
				px-4
			'
      >
        <span className='font-extrabold text-2xl'>Where in the world?</span>

        <button
          className='flex items-center justify-center gap-x-1 font-semibold'
          onClick={() => setMode('Dark Mode')}
        >
          <IoMoonOutline />
          {mode}
        </button>
      </div>
    </header>
  )
}
