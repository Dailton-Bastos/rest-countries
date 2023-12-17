import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { CgSpinner } from 'react-icons/cg'
import { usePageContext } from '../../context/PageProvider'
import type { Country } from '@/@types/country'

export const Search = () => {
  const debounceRef = React.useRef<NodeJS.Timeout>()

  const {
    state: { data, search },
    dispatch,
  } = usePageContext()

  const { value, isLoading } = search

  const searchCountriesByQuery = React.useCallback(
    async (query: string) => {
      const results = await new Promise<Country[]>((resolve) => {
        setTimeout(() => {
          const countries = data?.filter((country) => {
            return country?.name?.common
              .toLowerCase()
              .includes(query.toLowerCase())
          })

          resolve(countries)
        }, 1000)
      })

      return results
    },
    [data]
  )

  const onQueryChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: inputValue } = event.target

      dispatch({ type: 'START_SEARCH', payload: inputValue })

      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }

      debounceRef.current = setTimeout(async () => {
        if (inputValue.trim().length === 0) {
          dispatch({ type: 'CLEAN_QUERY', payload: null })

          return
        }

        const data = await searchCountriesByQuery(inputValue)

        dispatch({ type: 'FINISH_SEARCH', payload: data })
      }, 500)
    },
    [dispatch, searchCountriesByQuery]
  )

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
        {isLoading ? (
          <CgSpinner
            color='hsl(0, 0%, 52%)'
            size={22}
            className='animate-spin'
          />
        ) : (
          <IoMdSearch color='hsl(0, 0%, 52%)' size={22} />
        )}
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
        value={value}
        onChange={onQueryChange}
      />
    </div>
  )
}
