import types from './types'

export const changeTab = (data) => {
  return ({
    type: types.CHANGE_TAB,
    payload: data
  })
}

export default {
  changeTab
}