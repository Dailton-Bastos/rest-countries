'use client'

import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
import { useOnClickOutside } from 'usehooks-ts'
import type { OrderByType } from '@/@types'

type PropsType = {
  orderBy: (payload: OrderByType) => void
}

const orderByItems: Array<{
  name: string
  type: OrderByType
}> = [
  {
    name: 'Africa',
    type: 'africa',
  },
  {
    name: 'America',
    type: 'americas',
  },
  {
    name: 'Asia',
    type: 'asia',
  },
  {
    name: 'Europe',
    type: 'europe',
  },
  {
    name: 'Oceania',
    type: 'oceania',
  },
]

export const OrderBy = ({ orderBy }: PropsType) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const ref = React.useRef<null | HTMLDivElement>(null)

  const handleClick = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  useOnClickOutside(ref, handleClick)

  return (
    <div className='relative' ref={ref}>
      <button
        className='
			flex
			items-center
			justify-between
			gap-x-8
			text-blue-950
			font-semibold
			text-sm
			shadow
			rounded-md
			bg-white
			px-4
			py-3
			'
        data-testid='button-dropdown'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Filter by Region
        <div
          className={twMerge(
            `
						transition-transform
						duration-500

					`,
            isOpen && 'rotate-180'
          )}
        >
          <IoIosArrowDown color='hsl(200, 15%, 8%)' size={18} />
        </div>
      </button>

      {isOpen && (
        <div
          className='
						mt-1
						z-10
						shadow
						rounded-md
						bg-white
						absolute
						w-full
					'
          data-testid='menu-dropdown'
        >
          <ul
            className='
						w-full
						text-blue-950
						py-2
					'
          >
            {orderByItems?.map((order) => (
              <li
                key={order.type}
                className='font-semibold text-sm hover:bg-gray-50'
              >
                <button
                  className='w-full px-4 py-1 text-left'
                  onClick={() => {
                    orderBy(order.type)
                    handleClick()
                  }}
                >
                  {order.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
