import types from './types'

const ids = (state={}, action) => {
  switch(action.type) {
    case types.CREATE_ID:      
      return {...state, [action.payload]: action.payload}
      break
    case types.DELETE_ID:
      let stateWithoutTargetId = {}
      for (var key in state) {
        if(parseInt(key) !== action.payload) {
          stateWithoutTargetId[key] = parseInt(key)
        }
      }
      return stateWithoutTargetId
      break
    default:
      return state
  }
}

export default ids