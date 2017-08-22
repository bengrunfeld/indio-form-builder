import { combineReducers } from 'redux'
import types from './types'

const selectedTab = (state='', action) => 
  (action.type === types.CHANGE_TAB)?
  action.payload:
  state

export default combineReducers({
  selectedTab
})