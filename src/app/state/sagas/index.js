import { all, takeEvery } from 'redux-saga/effects'
import { tabsSaga } from '../modules/tabs'

function *rootSaga() {
  yield all([
    takeEvery("TAB_CLICK", tabsSaga)
  ])
  
}

export default rootSaga