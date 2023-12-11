'use client'

import React from 'react'
import { IoReload } from 'react-icons/io5'

type PropsType = {
  reset: () => void
}

export const PageError = ({ reset }: PropsType) => {
  return (
    <div
      className='
			flex
			items-center
			flex-col
			w-full
			text-center
			max-w-lg
			mx-auto
			py-10
			'
    >
      <h2 className='text-lg font-semibold mb-4'>Something went wrong!</h2>

      <button
        className='
				flex
				items-center
				gap-x-2
				text-blue-950
				font-semibold
				text-sm
				shadow
				rounded-md
				bg-white
				px-6
				py-3
				hover:shadow-md
				'
        onClick={() => reset()}
      >
        <IoReload size={22} />
        Try again
      </button>
    </div>
  )
}
