import React from 'react'
import type { Metadata } from 'next'

type PropsType = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Home | Countries',
}

const HomeLayout = ({ children }: PropsType) => {
  return <div className='pt-6'>{children}</div>
}

export default HomeLayout
