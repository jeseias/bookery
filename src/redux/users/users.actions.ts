import * as UserTypes from './users.types'

import { IUserAction } from '../store.types'

type TCounterActionCreator = (login: string) => IUserAction

export const SignInActionCreator: TCounterActionCreator = login => ({
  type: UserTypes.SIGNIN,
  payload: { login }
})
