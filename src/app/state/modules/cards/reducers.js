import types from './types'
import subCardDataTemplate from '../../../utils/sub-card-data-template'

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
      return stateWithNewType
      break
    case types.UPDATE_QUESTION:
      return state.map((item) => {
        if (item.id !== parseInt(action.payload.id))
          return item

        return Object.assign({}, item, {question: action.payload.question})
      })
      break
    case types.ADD_SUB_INPUT:
      const stateWithSubInput = state.map((item) => {
        if (item.id !== parseInt(action.payload))
          return item

        return Object.assign({}, item, {children: [...item.children, subCardDataTemplate]})
      })
      
      console.log(stateWithSubInput)
      return stateWithSubInput
    default:
      return state
  }
}

export default cards