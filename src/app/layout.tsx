import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
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
    <html lang='en'>
      <body className={twMerge('bg-gray-50', nunito.className)}>
        {children}
      </body>
    </html>
  )
}
