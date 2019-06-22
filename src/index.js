import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import App from './App'

// Creating the store using info from reducers.
// Reducers are the building blocks of a Redux Store
const store = createStore(reducers)

// This seems hacky, but here we go!

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
