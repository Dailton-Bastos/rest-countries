import React from 'react'

import type { Country } from '@/@types/country'
import type { ActionType, OrderByType } from '@/@types'

type PageContextType = {
  state: {
    data: Country[]
    countries: Country[]
    page: number
    orderBy: OrderByType
    total: number
  }
  dispatch: React.Dispatch<ActionType>
}

export const PageContext = React.createContext<PageContextType | null>(null)
