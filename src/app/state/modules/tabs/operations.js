import actions from './actions'
import types from './types'

const navigateToTab = (target) => {
  return ({
    type: types.CHANGE_TAB,
    payload: target
  })
}

export default {
  navigateToTab
}