import { Draft } from 'immer'

import type { ActionType, OrderByType } from '@/@types'
import type { Country } from '@/@types/country'

type StateType = {
  data: Country[]
  countries: Country[]
  page: number
  orderBy: OrderByType
  total: number
  search: {
    isLoading: boolean
    value: string
  }
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

      if (!!draft.search.value) {
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
      draft.search.value = ''
      break

    case 'REMOVE_FILTER': {
      draft.orderBy = ''
      draft.page = 1
      draft.countries = draft.data.slice(0, PageSize)
      draft.total = draft.data.length
      break
    }

    case 'START_SEARCH': {
      draft.search.isLoading = true
      draft.search.value = payload
      break
    }

    case 'CLEAN_QUERY': {
      draft.search.isLoading = false
      draft.search.value = ''
      draft.countries = draft.data.slice(0, PageSize)
      draft.total = draft.data.length
      break
    }

    case 'FINISH_SEARCH': {
      draft.search.isLoading = false
      draft.orderBy = ''
      draft.page = 1
      draft.countries = payload
      draft.total = payload.length
    }

    default:
      break
  }
}
