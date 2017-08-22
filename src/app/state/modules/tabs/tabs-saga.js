import { takeEvery } from 'redux-saga/effects'
import types from './types'

const sayHello = () => {
  console.log('Saga triggered')
}

function *tabsSaga() {
  yield takeEvery(types.CHANGE_TAB, sayHello)
}

export default tabsSaga