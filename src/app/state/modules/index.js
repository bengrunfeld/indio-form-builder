import { combineReducers } from 'redux'
import selectedTab from './tabs'
import cards from './cards'
import ids from './ids'

export default combineReducers({
  selectedTab,
  cards,
  ids
})