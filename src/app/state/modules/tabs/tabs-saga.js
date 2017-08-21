import { call } from 'redux-saga/effects'

const sayHello = () => {
  console.log('hello')
}

function *tabsSaga() {
  yield call(sayHello)
  console.log('Tab Saga Clicked')
}

export default tabsSaga