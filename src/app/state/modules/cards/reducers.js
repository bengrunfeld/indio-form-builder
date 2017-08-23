import types from './types'

const cards = (state=[], action) => 
  (action.type === types.CREATE_CARD)?
  [...state, action.payload]:
  state

export default cards