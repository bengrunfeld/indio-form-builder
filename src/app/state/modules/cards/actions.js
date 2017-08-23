import types from './types'

export const createTopLevelCard = (data) => {
  return ({
    type: types.CREATE_CARD,
    payload: data
  })
}

export default {
  createTopLevelCard
}