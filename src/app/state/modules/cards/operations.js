import actions from './actions'

const createTopLevelCard = data => {
  return actions.createTopLevelCard(data)
}

const deleteCard = data => {
  return actions.deleteCard(data)
}

const changeCardType = data => {
  return actions.changeCardType(data)
}

const updateQuestion = data => {
  return actions.updateQuestion(data)
}

export default {
  createTopLevelCard,
  deleteCard,
  changeCardType,
  updateQuestion
}