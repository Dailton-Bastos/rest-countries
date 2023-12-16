import { Draft } from 'immer'

import type { OrderByType } from '@/@types'
import type { Country } from '@/@types/country'

type ActionType =
  | {
      type: 'NEXT_PAGE'
      payload: number
    }
  | {
      type: 'ORDER_BY'
      payload: OrderByType
    }
  | {
      type: 'REMOVE_FILTER'
      payload: null
    }

type StateType = {
  data: Country[]
  countries: Country[]
  page: number
  orderBy: OrderByType
  total: number
}

export const countriesReducer = (
  draft: Draft<StateType>,
  action: ActionType
) => {
  const PageSize = 8

  const { type, payload } = action

  switch (type) {
    case 'NEXT_PAGE':
      draft.page += payload

      if (draft.orderBy) {
        draft.countries = draft.data.filter((country) => {
          return country?.region.toLowerCase() === draft.orderBy.toLowerCase()
        })

        draft.total = draft.countries.length
        draft.countries = draft.countries.slice(0, draft.page * PageSize)

        return
      }

      draft.total = draft.data.length
      draft.countries = draft.data.slice(0, draft.page * PageSize)
      break

    case 'ORDER_BY':
      draft.orderBy = payload

      draft.countries = draft.data.filter((country) => {
        return country?.region.toLowerCase() === payload.toLowerCase()
      })

      draft.total = draft.countries.length
      draft.countries = draft.countries.slice(0, PageSize)

      draft.page = 1
      break

    case 'REMOVE_FILTER': {
      draft.orderBy = ''
      draft.page = 1
      draft.countries = draft.data.slice(0, PageSize)
      draft.total = draft.data.length
      break
    }

    default:
      break
  }
}
