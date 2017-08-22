import actions from './actions'
import types from './types'

const navigateToTab = (target) => {
  return actions.changeTab(target)
}

export default {
  navigateToTab
}