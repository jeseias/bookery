import { action } from 'typesafe-actions'
import AuthActionTypes from './auth.enums'
import { IAuthSignInData, IUser } from './auth.types'

export const signInRequest = ({ login }: IAuthSignInData) =>
  action(AuthActionTypes.SIGN_IN_REQUEST, { login })

export const signInSuccess = (user: IUser) =>
  action(AuthActionTypes.SIGN_IN_SUCCESS, { user })

export const signInFailure = () => action(AuthActionTypes.SIGN_IN_FAILURE)

export const signOut = () => action(AuthActionTypes.SIGN_OUT_REQUEST)
