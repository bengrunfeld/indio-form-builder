import { combineReducers } from 'redux'
import types from './types'

const tabsReducer = (state=[], action) => 
  (action.type === types.CHANGE_TABS)?
  action.payload:
  state

export default combineReducers({
  tabs: tabsReducer
})