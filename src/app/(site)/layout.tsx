import React from 'react'
import type { Metadata } from 'next'

import { Search } from './components/Search'
import { OrderBy } from './components/OrderBy'

type PropsType = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Home | Countries',
}

const HomeLayout = ({ children }: PropsType) => {
  return (
    <div className='pt-5'>
      <section className='py-5'>
        <div className='flex items-center justify-between'>
          <Search />

          <OrderBy />
        </div>
      </section>

      {children}
    </div>
  )
}

export default HomeLayout
