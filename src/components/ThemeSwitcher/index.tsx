'use client'

import React from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <button
      className='
				flex
				items-center
				justify-center
				gap-x-1
				font-semibold
				text-sm
				lg:text-base
			'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <IoMoonOutline /> : <IoSunnyOutline />}

      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}
