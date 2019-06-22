import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import reducers from './reducers'
import Provider from './providers'
import Consumer from './consumer'
import App from './App'

// Creating the store using info from reducers.
// Reducers are the building blocks of a Redux Store
// const store = createStore(reducers)

// This seems hacky, but here we go!

// With Redux
/* ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
) */

// With Context
ReactDOM.render(
  <Provider>
    <Consumer>
      <App />
    </Consumer>
  </Provider>,
  document.getElementById('root')
)
