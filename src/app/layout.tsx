import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import { ThemeProvider } from './theme-provider'
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
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={twMerge(
          'bg-gray-50 dark:bg-blue-900 duration-200',
          nunito.className
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />

          <div
            className='
						max-w-[1440px]
						mx-auto
						pt-20
						pb-5
						px-4
						lg:px-8
						lg:pb-20
					'
          >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
