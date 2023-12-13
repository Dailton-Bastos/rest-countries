import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import { Header } from '@/components/Header'

import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Countries',
  description: 'REST Countries API with color theme switcher',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={twMerge('bg-gray-50', nunito.className)}>
        <Header />

        <div className='max-w-[1440px] mx-auto py-20 px-4'>{children}</div>
      </body>
    </html>
  )
}
