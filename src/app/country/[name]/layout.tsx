import React from 'react'
import type { Metadata } from 'next'
import { getCountryByName } from '@/actions/getCountryByName'

export const revalidate = 3600

type PropsType = {
  params: { name: string }
  children: React.ReactNode
}

export async function generateMetadata({
  params,
}: PropsType): Promise<Metadata> {
  const name = params?.name

  const [country] = await getCountryByName(name)

  return {
    title: `${country?.name?.official} | Countries`,
  }
}

const CountryLayout = ({ children }: PropsType) => {
  return <div className='px-4 py-8 lg:px-0 lg:py-20'>{children}</div>
}

export default CountryLayout
