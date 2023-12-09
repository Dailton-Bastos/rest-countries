import React from 'react'
import { IoMdSearch } from 'react-icons/io'

export const Search = () => {
  return (
    <div
      className='
			relative
			shadow
			rounded-md
			bg-white
			overflow-hidden
			w-full
			max-w-[400px]
		'
    >
      <label htmlFor='search' className='sr-only'>
        Search
      </label>

      <div
        className='
				absolute
				inset-y-0
				start-2
				flex
				items-center
				ps-3
				pointer-events-none
				'
      >
        <IoMdSearch color='hsl(0, 0%, 52%' size={22} />
      </div>

      <input
        type='text'
        id='search'
        placeholder='Search for a country...'
        className='
					block
					w-full
					p-3
					ps-14
					text-sm
					focus:outline-none
					placeholder:text-gray-900
				'
      />
    </div>
  )
}
