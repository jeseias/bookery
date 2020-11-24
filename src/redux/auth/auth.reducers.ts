import AuthActionTypes from './auth.enums'
import { IAuthStateStore, TAuthAction } from './auth.types'

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
    case AuthActionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        isSignIn: true,
        isHeaderVisible: true,
        user: action.payload.user
      }
    case AuthActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        isSignIn: true,
        isHeaderVisible: false
      }
    case AuthActionTypes.SIGN_OUT_REQUEST:
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
