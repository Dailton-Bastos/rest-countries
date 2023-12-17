'use client'

import React from 'react'
import { IoIosArrowDown, IoMdCloseCircle } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
import { useOnClickOutside } from 'usehooks-ts'
import type { OrderByType } from '@/@types'
import { usePageContext } from '../../context/PageProvider'

const orderByItems: Array<{
  name: string
  type: OrderByType
}> = [
  {
    name: 'Africa',
    type: 'africa',
  },
  {
    name: 'Americas',
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

export const OrderBy = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const ref = React.useRef<null | HTMLDivElement>(null)

  const { state, dispatch } = usePageContext()

  const { orderBy: selected } = state

  const orderBy = React.useCallback(
    (payload: OrderByType) => {
      dispatch({
        type: 'ORDER_BY',
        payload,
      })
    },
    [dispatch]
  )

  const handleRemoveFilter = React.useCallback(() => {
    dispatch({ type: 'REMOVE_FILTER', payload: null })
  }, [dispatch])

  const handleClick = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  useOnClickOutside(ref, handleClick)

  return (
    <div className='relative' ref={ref}>
      <div className='flex items-center justify-center gap-5'>
        {selected && (
          <div className='flex items-center justify-center gap-2 py-2'>
            <span
              className='text-blue-950 font-bold text-sm capitalize'
              data-testid='selected-order'
            >
              {selected}
            </span>
            <button data-testid='button-order' onClick={handleRemoveFilter}>
              <IoMdCloseCircle />
            </button>
          </div>
        )}

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
						h-11
						w-48
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
      </div>

      {isOpen && (
        <div
          className='
						mt-1
						z-10
						shadow
						rounded-md
						bg-white
						absolute
						top-11
						right-0
						w-48
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
                className={twMerge(
                  `
									font-semibold
									text-sm
									hover:bg-gray-50
								`,
                  order.type === selected && 'bg-gray-100'
                )}
              >
                <button
                  className='w-full px-4 py-1 text-left'
                  data-testid={`button-order-${order.type}`}
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
