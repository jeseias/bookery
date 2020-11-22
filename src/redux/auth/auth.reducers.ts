import UserActionTypes from './auth.enums'
import { IAuthSignInData, IAuthStateStore, TAuthAction } from './auth.types'

const INITIAL_STATE: IAuthStateStore = {
  login: '',
  error: false,
  isSignIn: false,
  loading: false,
  user: {
    avatar_url: '',
    bio: '',
    email: '',
    html_url: '',
    name: ''
  }
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
        isSignIn: true
      }
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        isSignIn: true
      }
    case UserActionTypes.SIGN_OUT_REQUEST:
      return {
        ...state,
        user: null,
        loading: false,
        error: false,
        isSignIn: false
      }
    default:
      return state
  }
}

export default authReducer
