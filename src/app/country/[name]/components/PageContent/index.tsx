'use client'

import React from 'react'

import { GoBackButton } from '../GoBackButton'
import type { Country } from '@/@types/country'
import Image from 'next/image'
import { PageDetails } from '../PageDetails'

type PropsType = {
  country: Country
}

export const PageContent = ({ country }: PropsType) => {
  const data = React.useMemo(
    () => ({
      flags: {
        url: country?.flags?.svg || country?.flags?.png,
        alt: country?.flags?.alt || country?.name?.official,
      },
      latlng: country?.latlng,
    }),
    [country]
  )

  return (
    <React.Fragment>
      <GoBackButton />

      <section className='py-10 lg:py-24'>
        <div
          className='
					grid
					grid-cols-1
					items-center
					justify-between
					lg:grid-cols-2
				'
        >
          <Image
            src={data?.flags?.url}
            alt={data?.flags?.alt}
            width={560}
            height={410}
            className='w-auto h-auto object-contain max-h-[470px]'
          />

          <PageDetails country={country} />
        </div>
      </section>
    </React.Fragment>
  )
}
