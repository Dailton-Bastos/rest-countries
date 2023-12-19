import React from 'react'
import CountUp from 'react-countup'
import { twMerge } from 'tailwind-merge'

import type { Country } from '@/@types/country'
import { BorderCountries } from '../BorderCountries'

type PropsType = {
  country: Country
}

export const PageDetails = ({ country }: PropsType) => {
  const data = React.useMemo(
    () => ({
      name: country?.name,
      population: country?.population,
      region: country?.region,
      subregion: country?.subregion,
      capital: country?.capital[0],
      topLevelDomain: country?.tld?.toString().replaceAll(',', ', '),
      currencies: Object.values(country?.currencies)[0]?.name,
      flags: {
        url: country?.flags?.svg || country?.flags?.png,
        alt: country?.flags?.alt || country?.name?.official,
      },
      independent: country?.independent,
      languages: Object.values(country?.languages)
        .toString()
        .replaceAll(',', ', '),
    }),
    [country]
  )

  return (
    <div className='pl-28'>
      <h1
        className='
					font-bold
					text-5xl
					text-blue-950
				'
      >
        {data?.name?.common}
      </h1>

      <div className='flex items-start justify-between pt-10 gap-5'>
        <ul>
          <li className='py-1 text-base text-blue-950'>
            <strong>Native Name:</strong>{' '}
            <span className='text-gray-900'>{data.name.official}</span>
          </li>

          <li className='py-1 text-base text-blue-950'>
            <strong>Population:</strong>{' '}
            <CountUp
              end={data.population}
              duration={2.75}
              className='text-gray-900 text-sm'
            />
          </li>

          <li className='py-1 text-base text-blue-950'>
            <strong>Region:</strong>{' '}
            <span className='text-gray-900'>{data.region}</span>
          </li>

          <li className='py-1 text-base text-blue-950'>
            <strong>Sub Region:</strong>{' '}
            <span className='text-gray-900'>{data.subregion}</span>
          </li>

          <li className='py-1 text-base text-blue-950'>
            <strong>Capital:</strong>{' '}
            <span className='text-gray-900'>{data.capital}</span>
          </li>
        </ul>

        <ul>
          <li className='py-1 text-base text-blue-950'>
            <strong>Top Level Domain:</strong>{' '}
            <span className='text-gray-900'>{data.topLevelDomain}</span>
          </li>

          <li className='py-1 text-base text-blue-950'>
            <strong>Currencies:</strong>{' '}
            <span className='text-gray-900'>{data.currencies}</span>
          </li>

          <li className='py-1 text-base text-blue-950'>
            <strong>Languages:</strong>{' '}
            <span className='text-gray-900'>{data.languages}</span>
          </li>

          <li
            className='
							py-1
							text-base
							text-blue-950
							flex
							items-center
							gap-2
									'
          >
            <strong>Independent:</strong>{' '}
            <div
              className={twMerge(
                `
									w-3
									h-3
									rounded-full
									inline-block
								`,
                country?.independent === false ? 'bg-red-600' : 'bg-green-600'
              )}
            />
          </li>
        </ul>
      </div>

      {country?.borders?.length > 0 && (
        <BorderCountries borders={country.borders} />
      )}
    </div>
  )
}
