import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CgSpinner } from 'react-icons/cg'

import { Card } from '../Card'
import type { Country } from '@/@types/country'

type PropsType = {
  data: Country[]
  dataLength: number
  onNextPage: () => void
  hasMore: boolean
}

export const ListCountries = ({
  data,
  dataLength,
  onNextPage,
  hasMore,
}: PropsType) => {
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
        {data?.map((country) => (
          <Card key={country?.name?.official} card={country} />
        ))}
      </ul>
    </InfiniteScroll>
  )
}
