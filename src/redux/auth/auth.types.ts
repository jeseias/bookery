import { ActionType } from 'typesafe-actions'
import * as AuthAction from './auth.actions'

export type TAuthAction = ActionType<typeof AuthAction>

export interface IAuthSignInData {
  login: string
}

export interface IUser {
  readonly avatar_url: string | null
  readonly html_url: string
  readonly name: string
  readonly email: string | null
  readonly bio: string | null
  readonly twitter_username: string | null
}

export interface IAuthStateStore {
  readonly login: string
  readonly loading: boolean
  readonly isSignIn: boolean
  readonly error: boolean
  readonly isHeaderVisible: boolean

  user: IUser | null
}
