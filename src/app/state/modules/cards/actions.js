import types from './types'

export const createTopLevelCard = data => {
  return ({
    type: types.CREATE_CARD,
    payload: data
  })
}

export const deleteCard = data => {
  return ({
    type: types.DELETE_CARD,
    payload: data
  })
}

export const changeCardType = data => {
  return ({
    type: types.CHANGE_TYPE,
    payload: data
  })
}

export const updateQuestion = data => {
  return ({
    type: types.UPDATE_QUESTION,
    payload: data
  })
}

export const addSubInput = data => {
  return ({
    type: types.ADD_SUB_INPUT,
    payload: data
  })
}

export default {
  createTopLevelCard,
  deleteCard,
  changeCardType,
  updateQuestion,
  addSubInput
}