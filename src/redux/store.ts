import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { applyMiddleware, createStore, Middleware } from 'redux'
import logger from 'redux-logger'
import { isDevelopment } from '../utils/enviroment'
import rootReducer from './root-reducer'
import { IStoreState, TStoreAction } from './store.types'

export const makeStore: MakeStore<IStoreState, TStoreAction> = () => {
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
