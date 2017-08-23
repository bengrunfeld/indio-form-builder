import actions from './actions'

const navigateToTab = target => {
  return actions.changeTab(target)
}

export default {
  navigateToTab
}