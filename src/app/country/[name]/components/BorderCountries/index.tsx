'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { getCountryByCode } from '@/actions/getCountryByCode'
import { CgSpinner } from 'react-icons/cg'

type PropsType = {
  borders: string[]
}

type CountryByCode = {
  name: {
    common: string
    official: string
  }
}

export const BorderCountries = ({ borders = [] }: PropsType) => {
  const [isLoading, setIsLoading] = React.useState(false)

  const [borderCountry, setBorderCountry] = React.useState<CountryByCode[]>([])

  const router = useRouter()

  const fetchCountryBorders = React.useCallback(async () => {
    const requests = borders?.map(async (border) => {
      const data = await getCountryByCode(border)

      return data
    })

    try {
      setIsLoading(true)

      const data = await Promise.all(requests)

      if (data !== null) {
        setBorderCountry([...data])
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }, [borders])

  React.useEffect(() => {
    fetchCountryBorders()
  }, [fetchCountryBorders])

  return (
    <div className='flex items-center justify-start gap-4 pt-16'>
      <strong className='whitespace-nowrap'>Border Countries: </strong>

      <ul className='flex items-center justify-stretch flex-wrap gap-2'>
        {isLoading ? (
          <CgSpinner
            color='hsl(0, 0%, 52%)'
            size={22}
            className='animate-spin'
          />
        ) : (
          <>
            {borderCountry?.map((border) => (
              <li className='text-gray-900' key={border?.name?.official}>
                <button
                  className='
									bg-gray-50
										text-sm
										rounded
										px-4
										py-2
										min-w-[120px]
										shadow-[0_2px_10px_rgb(0,0,0,0.2)]
									'
                  onClick={() =>
                    router.push(`/country/${border?.name?.common}`, {
                      scroll: true,
                    })
                  }
                >
                  {border?.name?.common}
                </button>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  )
}
