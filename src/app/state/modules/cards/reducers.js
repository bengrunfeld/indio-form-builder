import types from './types'

const cards = (state=[], action) => {
  switch(action.type) {
    case types.CREATE_CARD:
      return [...state, action.payload]
      break
    case types.DELETE_CARD:
      const newState = state.filter((item) => 
        item.id !== action.payload
      )
      return newState
      break
    case types.CHANGE_TYPE:
      const stateWithNewType = state.map((item) => {
        if (item.id !== action.payload.id)
          return item

        const newItem = Object.assign({}, item, {type: action.payload.type})
        return newItem
      })
      console.log(stateWithNewType)
      return stateWithNewType
      break
    case types.UPDATE_QUESTION:
      const result = state.map((item) => {
        if (item.id !== parseInt(action.payload.id))
          return item

        return Object.assign({}, item, {question: action.payload.question})
      })
      console.log(result)
      return result
      break
    default:
      return state
  }
}

export default cards