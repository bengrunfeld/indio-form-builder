import types from './types'

export const createId = data => {
  return ({
    type: types.CREATE_ID,
    payload: data
  })
}

export const deleteId = data => {
  return ({
    type: types.DELETE_ID,
    payload: data
  })
}


export default {
  createId,
  deleteId
}