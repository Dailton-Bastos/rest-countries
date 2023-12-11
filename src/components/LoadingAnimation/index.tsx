import Image from 'next/image'
import React from 'react'

export const LoadingAnimation = () => {
  return (
    <div className='flex items-center justify-center w-full h-full pt-48'>
      <Image
        src='/images/countries-flags.gif'
        alt='Animated coutries flags'
        width={180}
        height={180}
      />
    </div>
  )
}
