'use client'

import React from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { useRouter } from 'next/navigation'

export const GoBackButton = () => {
  const router = useRouter()

  return (
    <button
      data-testid='button-go-back'
      type='button'
      onClick={() => router.push('/', { scroll: false })}
      className='
				bg-gray-50
				flex
				items-center
				justify-center
				gap-2
				h-10
				w-32
				text-sm
				text-blue-950
				rounded
				shadow-[0_3px_8px_rgb(0,0,0,0.3)]
				'
    >
      <HiOutlineArrowNarrowLeft size={23} />
      Back
    </button>
  )
}
