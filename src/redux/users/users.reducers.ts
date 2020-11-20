import { Reducer } from 'redux'
import * as UserTypes from './users.types'

import { IAppState, IUserAction } from '../store.types'

import { INITIAL_STATE } from '../store.state'

export const userReducer: Reducer<IAppState, IUserAction> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case UserTypes.SIGNIN:
      return {
        ...state,
        logged: true,
        user: { login: action.payload.login }
      }
    case UserTypes.LOGOUT:
      return {
        ...state,
        logged: false,
        user: undefined
      }
    default:
      return state
  }
}
