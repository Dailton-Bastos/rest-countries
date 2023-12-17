'use client'

import React from 'react'
import CountUp from 'react-countup'
import Image from 'next/image'
import Link from 'next/link'
import type { Country } from '@/@types/country'

type PropsType = {
  card: Pick<Country, 'flags' | 'name' | 'population' | 'region' | 'capital'>
}

export const Card = ({ card }: PropsType) => {
  const { flags, name, population, region, capital } = card

  const image = flags?.svg ?? flags?.png

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
      <Link
        href={`/country/${name.common}`}
        className='w-full h-full flex flex-col'
      >
        <Image
          priority
          src={image}
          alt={flags?.alt || name?.common}
          width={320}
          height={224}
          className='max-h-48 object-contain w-full h-auto'
        />

        <div className='px-4 pt-6 pb-10 mt-auto'>
          <h2 className='text-blue-950 font-extrabold text-2xl'>
            {name?.common}
          </h2>

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
