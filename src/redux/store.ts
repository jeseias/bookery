import { MakeStore, createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, createStore, Middleware } from 'redux'
import { isDevelopment } from '../utils/enviroment'
import logger from 'redux-logger'

import { IAppState } from './store.types'
import rootReducer from './root-reducer'

export const makeStore: MakeStore<IAppState> = () => {
  const middlewares: Middleware[] = []

  if (isDevelopment) {
    middlewares.push(logger)
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  return store
}

export const wrapper = createWrapper(makeStore, {
  debug: isDevelopment
})
