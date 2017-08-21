import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './app/state/store'

import './App.css'

const initialState = {}
const store = configureStore(initialState)

store.dispatch({type: 'TAB_CLICK'})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <p>Hello</p>
      </Provider>
    )
  }
}

export default App
