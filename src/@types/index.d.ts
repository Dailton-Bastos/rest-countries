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
