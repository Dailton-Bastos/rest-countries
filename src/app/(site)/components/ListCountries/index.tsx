import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CgSpinner } from 'react-icons/cg'

import { Card } from '../Card'
import { usePageContext } from '../../context/PageProvider'

export const ListCountries = () => {
  const { state, dispatch } = usePageContext()

  const { countries, total } = state

  const hasMore = total > countries.length
  const dataLength = countries.length

  const onNextPage = React.useCallback(() => {
    dispatch({
      type: 'NEXT_PAGE',
      payload: 1,
    })
  }, [dispatch])

  const loader = (
    <div className='flex items-center justify-center gap-2 py-10'>
      <div className='animate-spin h-6 w-6'>
        <CgSpinner size={24} />
      </div>

      <p className='text-lg font-semibold'>Loading...</p>
    </div>
  )

  const endMessage = (
    <div className='pt-8'>
      <p className='text-lg font-semibold text-center'>
        Yay! You have seen it all
      </p>
    </div>
  )

  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={onNextPage}
      hasMore={hasMore}
      loader={loader}
      endMessage={endMessage}
    >
      <ul className='grid grid-cols-4 gap-20'>
        {countries?.map((country) => (
          <Card key={country?.name?.official} card={country} />
        ))}
      </ul>
    </InfiniteScroll>
  )
}
