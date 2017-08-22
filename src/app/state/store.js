import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'
import { rootReducer } from './modules'

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

  store.subscribe( () => console.log(store.getState()) )
  
  return store
}

export default configureStore