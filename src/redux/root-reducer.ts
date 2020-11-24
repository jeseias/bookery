import { combineReducers } from 'redux'
import authReducer from './auth/auth.reducers'
import { navReducer } from './nav/nav.reducers'
import { IStoreState } from './store.types'

export default combineReducers<IStoreState>({
  auth: authReducer,
  nav: navReducer
})
