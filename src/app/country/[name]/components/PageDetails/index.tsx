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

  const liClassName = 'py-1 text-sm lg:text-base text-blue-950 dark:text-white'
  const spanClassName = 'text-sm text-gray-900 dark:text-white font-light'

  return (
    <div className='pt-8 lg:pl-28 lg:pt-0'>
      <h1
        className='
					font-bold
					text-2xl
					text-blue-950
					dark:text-white
					lg:text-5xl
				'
      >
        {data?.name?.common}
      </h1>

      <div
        className='
				flex
				items-start
				justify-start
				flex-col
				pt-6
				gap-5
				lg:pt-10
				lg:justify-between
				lg:flex-row
			'
      >
        <ul>
          <li className={liClassName}>
            <strong>Native Name:</strong>{' '}
            <span className={spanClassName}>{data.name.official}</span>
          </li>

          <li className={liClassName}>
            <strong>Population:</strong>{' '}
            <CountUp
              end={data.population}
              duration={2.75}
              className={spanClassName}
            />
          </li>

          <li className={liClassName}>
            <strong>Region:</strong>{' '}
            <span className={spanClassName}>{data.region}</span>
          </li>

          <li className={liClassName}>
            <strong>Sub Region:</strong>{' '}
            <span className={spanClassName}>{data.subregion}</span>
          </li>

          <li className={liClassName}>
            <strong>Capital:</strong>{' '}
            <span className={spanClassName}>{data.capital}</span>
          </li>
        </ul>

        <ul>
          <li className={liClassName}>
            <strong>Top Level Domain:</strong>{' '}
            <span className={spanClassName}>{data.topLevelDomain}</span>
          </li>

          <li className={liClassName}>
            <strong>Currencies:</strong>{' '}
            <span className={spanClassName}>{data.currencies}</span>
          </li>

          <li className={liClassName}>
            <strong>Languages:</strong>{' '}
            <span className={spanClassName}>{data.languages}</span>
          </li>

          <li
            className='
							py-1
							text-base
							text-blue-950
							dark:text-white
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
