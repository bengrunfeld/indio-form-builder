import actions from './actions'

const createId = data => {
  return actions.createId(data)
}

const deleteId = data => {
  return actions.deleteId(data)
}

export default {
  createId,
  deleteId
}