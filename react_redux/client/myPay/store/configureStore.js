import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import myPayCheckApp from "../reducers/reducers.js";

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    myPayCheckApp,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}