import React from 'react'
import { getCountryByName } from '@/actions/getCountryByName'
import { PageContent } from './components/PageContent'

export const revalidate = 3600

type PropsType = {
  params: { name: string }
}

const Country = async ({ params }: PropsType) => {
  const { name } = params

  const [country] = await getCountryByName(name)

  return <PageContent country={country} />
}

export default Country
