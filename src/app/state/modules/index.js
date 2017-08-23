import { combineReducers } from 'redux'
import selectedTab from './tabs/reducers'
import cards from './cards/reducers'

export default combineReducers({
  selectedTab,
  cards
})