import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'
import App from './App'

const $app = document.getElementById('root')

const initialState = {
  title: 'Hello World!'
}

const middleware = process.env.NODE_ENV === 'production'
  ? [thunk]
  : [thunk, createLogger()]

const store = createStore(reducer,
                          initialState,
                          applyMiddleware(...middleware))

if (module.hot) {
  module.hot.accept('./reducer', () => {
    console.log('Replacing reducer...')
    const nextReducer = require('./reducer').default
    store.replaceReducer(nextReducer)
  })
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  $app
)
