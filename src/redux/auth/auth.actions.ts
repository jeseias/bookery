import { action } from 'typesafe-actions'
import UserActionTypes from './auth.enums'
import { IAuthSignInData, IUser } from './auth.types'

export const signInRequest = ({ login }: IAuthSignInData) =>
  action(UserActionTypes.SIGN_IN_REQUEST, { login })

export const signInSuccess = (user: IUser) =>
  action(UserActionTypes.SIGN_IN_SUCCESS, { user })

export const signInFailure = () => action(UserActionTypes.SIGN_IN_FAILURE)

export const signOut = () => action(UserActionTypes.SIGN_OUT_REQUEST)
