import UserActionTypes from './auth.enums'
import { IAuthSignInData, IAuthStateStore, TAuthAction } from './auth.types'

const INITIAL_STATE: IAuthStateStore = {
  login: '',
  error: false,
  isSignIn: false,
  loading: false,
  isHeaderVisible: false,
  user: null
}

function authReducer(
  state = INITIAL_STATE,
  action: TAuthAction
): IAuthStateStore {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        isSignIn: true,
        isHeaderVisible: true
      }
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        isSignIn: true,
        isHeaderVisible: false
      }
    case UserActionTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        user: null,
        loading: false,
        error: false,
        isSignIn: false,
        isHeaderVisible: false
      }
    default:
      return state
  }
}

export default authReducer
