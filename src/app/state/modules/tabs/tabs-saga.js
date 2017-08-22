import { takeEvery, select } from 'redux-saga/effects'
import types from './types'

const sayHello = () => {
  console.log('Saga triggered')
}

const selectedTab = (state) => state.selectedTab

function *tabsSaga() {
  yield takeEvery(types.CHANGE_TAB, sayHello)
}

export default tabsSaga