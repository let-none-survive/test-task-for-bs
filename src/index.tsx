import { DispatchType, StoreAction, StoreState } from '@/interfaces'
import React from 'react'
import { render } from 'react-dom'
import App from '@/containers/App'

import { createStore, applyMiddleware, Store, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from '@/store/reducer'

const store: Store<StoreState, StoreAction> & {
  dispatch: DispatchType
  // @ts-ignore
} = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

const rootEl = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
)
