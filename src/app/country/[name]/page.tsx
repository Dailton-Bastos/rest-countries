import React from 'react'
import { getCountryByName } from '@/actions/getCountryByName'

export const revalidate = 3600

type PropsType = {
  params: { name: string }
}

const Country = async ({ params }: PropsType) => {
  const { name } = params

  const [country] = await getCountryByName(name)

  return <div>Country: {country.name.common}</div>
}

export default Country
