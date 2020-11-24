import * as AuthAction from '../auth.actions'
import AuthActionTypes from '../auth.enums'
import { IUser } from '../auth.types'

describe('Auth Actions Test', () => {
  test('SignIn Request', () => {
    const data = AuthAction.signInRequest({ login: 'jeseias' })

    expect(data).toEqual({
      type: AuthActionTypes.SIGN_IN_REQUEST,
      payload: { login: 'jeseias' }
    })
  })

  test('SignIn Success ', () => {
    const user: IUser = {
      avatar_url: 'image-location',
      bio: 'Some biografy',
      email: 'domingosjeseias@gmail.com',
      html_url: 'https://github.com/jeseias',
      name: 'Jeseias Domingos',
      twitter_username: 'jeseiasD'
    }

    const data = AuthAction.signInSuccess(user)

    expect(data).toEqual({
      type: AuthActionTypes.SIGN_IN_SUCCESS,
      payload: { user }
    })
  })

  test('SignIn Failure', () => {
    const result = AuthAction.signInFailure()

    expect(result).toEqual({ type: AuthActionTypes.SIGN_IN_FAILURE })
  })

  test('SignOut Request', () => {
    const result = AuthAction.signOut()

    expect(result).toEqual({ type: AuthActionTypes.SIGN_OUT_REQUEST })
  })
})
