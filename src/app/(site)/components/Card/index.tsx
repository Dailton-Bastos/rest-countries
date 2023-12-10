'use client'

import React from 'react'
import CountUp from 'react-countup'
import Image from 'next/image'
import Link from 'next/link'

type CardType = {
  flag: {
    url: string
    alt?: string
  }
  name: string
  population: number
  region: string
  capital: string
}

type PropsType = {
  card: CardType
}

export const Card = ({ card }: PropsType) => {
  const {
    flag: { url, alt },
    name,
    population,
    region,
    capital,
  } = card

  return (
    <li
      className='
			bg-white
			rounded-md
			overflow-hidden
			shadow
			hover:shadow-md
			'
    >
      <Link href='#' className='w-full h-full'>
        <Image priority src={url} alt={alt || name} width={320} height={224} />

        <div className='px-4 pt-6 pb-10'>
          <h2 className='text-blue-950 font-extrabold text-2xl'>{name}</h2>

          <ul className='pt-2'>
            <li className='text-blue-950 font-semibold leading-7'>
              Population:{' '}
              <CountUp
                end={population}
                duration={2.75}
                className='text-gray-900 text-sm'
              />
            </li>

            <li className='text-blue-950 font-semibold leading-7'>
              Region: <span className='text-gray-900 text-sm'>{region}</span>
            </li>

            <li className='text-blue-950 font-semibold leading-7'>
              Capital: <span className='text-gray-900 text-sm'>{capital}</span>
            </li>
          </ul>
        </div>
      </Link>
    </li>
  )
}
