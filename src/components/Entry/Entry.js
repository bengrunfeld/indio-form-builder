import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../app/state/store'
import Layout from '../Layout/Layout'

const initialState = {
  selectedTab: 'Create',
  cards: []
  // Potentially have a sample question here
  // to illustrate to User how app works
}

const store = configureStore(initialState)

// TODO: Remove
store.dispatch({type: 'TAB_CLICK'})

const Entry = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default Entry
