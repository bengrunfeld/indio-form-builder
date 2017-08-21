import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './modules/tabs/tabs-saga'
import * as reducers from './modules'

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware()

  const rootReducer = combineReducers(reducers)

  const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore