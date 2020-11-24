import AuthActionTypes from '../auth.enums'
import * as Actions from '../auth.actions'
import authReducer, { INITIAL_STATE as state } from '../auth.reducers'
import { IUser } from '../auth.types'

describe('Auth Reducer', () => {
  test(`${AuthActionTypes.SIGN_IN_REQUEST}: Set the loader to true`, () => {
    const result = authReducer(
      state,
      Actions.signInRequest({ login: 'jeseias' })
    )

    expect(result.loading).toBe(true)
  })

  test(`${AuthActionTypes.SIGN_IN_SUCCESS}: Github user should be found`, () => {
    const user: IUser = {
      avatar_url: 'image-location',
      bio: 'Some biografy',
      email: 'domingosjeseias@gmail.com',
      html_url: 'https://github.com/jeseias',
      name: 'Jeseias Domingos',
      twitter_username: 'jeseiasD'
    }

    const result = authReducer(state, Actions.signInSuccess(user))

    expect(result.user).not.toBeNull()
    expect(result.loading).toBe(false)
    expect(result.isSignIn).toBe(true)
  })

  test(`${AuthActionTypes.SIGN_IN_FAILURE}: User should be null and not signed In, and error true`, () => {
    const result = authReducer(state, Actions.signInFailure())

    expect(result.isSignIn).toBe(false)
    expect(result.loading).toBe(false)
    expect(result.error).toBe(true)
  })

  test(`${AuthActionTypes.SIGN_OUT_REQUEST}: Nullifies user, and logs him out`, () => {
    const result = authReducer(state, Actions.signOut())

    expect(result.isSignIn).toBe(false)
    expect(result.loading).toBe(false)
    expect(result.error).toBe(false)
    expect(result.user).toBeNull()
  })
})
