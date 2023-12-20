import React from 'react'
import { ThemeSwitcher } from '../ThemeSwitcher'

export const Header = () => {
  return (
    <header
      className='
			bg-white
			dark:bg-blue-800
			shadow-sm
			fixed
			top-0
			left-0
			w-full
			z-10
		'
    >
      <div
        className='
				flex
				items-center
				justify-between
				max-w-[1440px]
				mx-auto
				py-6
				px-4
				lg:px-8
			'
      >
        <span className='font-extrabold text-base lg:text-2xl'>
          Where in the world?
        </span>

        <ThemeSwitcher />
      </div>
    </header>
  )
}
