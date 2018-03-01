/* @flow */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
import promiseMiddleware from './promiseMiddleware'
import * as reducers from './reducers'

const enhancer = compose(
  applyMiddleware(
    reduxThunkMiddleware,
    promiseMiddleware,
  ),
)

export default function configureStore (initialState) {
  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    enhancer
  )

  return store
}
