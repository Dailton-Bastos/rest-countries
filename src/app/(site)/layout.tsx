import React from 'react'
import type { Metadata } from 'next'
import { ScrollToTop } from '@/components/ScrollToTop'

type PropsType = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Home | Countries',
}

const HomeLayout = ({ children }: PropsType) => {
  return (
    <div className='lg:pt-6'>
      {children}

      <ScrollToTop />
    </div>
  )
}

export default HomeLayout
