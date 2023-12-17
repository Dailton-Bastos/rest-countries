export type OrderByType =
  | 'africa'
  | 'americas'
  | 'asia'
  | 'europe'
  | 'oceania'
  | ''

export type ActionType =
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
  | {
      type: 'START_SEARCH'
      payload: string
    }
  | {
      type: 'FINISH_SEARCH'
      payload: Country[]
    }
  | {
      type: 'CLEAN_QUERY'
      payload: null
    }
