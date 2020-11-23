import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { applyMiddleware, createStore, Middleware } from 'redux'
import logger from 'redux-logger'
import { isDevelopment } from '../utils/enviroment'
import rootReducer from './root-reducer'
import { IStoreState, TStoreAction } from './store.types'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './root-saga'

export const makeStore: MakeStore<IStoreState, TStoreAction> = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares: Middleware[] = [sagaMiddleware]

  if (isDevelopment) {
    middlewares.push(logger)
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(makeStore, {
  debug: isDevelopment
})
