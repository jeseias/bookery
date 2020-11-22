import { action } from 'typesafe-actions'
import UserActionTypes from './auth.enums'
import { IAuthSignInData } from './auth.types'

export const signInRequest = ({ login }: IAuthSignInData) =>
  action(UserActionTypes.SIGN_IN_REQUEST, { login })

export const signInSuccess = ({ login }: IAuthSignInData) =>
  action(UserActionTypes.SIGN_IN_SUCCESS, { login })

export const signInFailure = () => action(UserActionTypes.SIGN_IN_FAILURE)

export const signOut = () => action(UserActionTypes.SIGN_OUT_REQUEST)
