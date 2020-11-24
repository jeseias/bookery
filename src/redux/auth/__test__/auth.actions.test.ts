import * as AuthAction from '../auth.actions'
import AuthActionTypes from '../auth.enums'

describe('Cart Actions', () => {
  test('Sign  in request', () => {
    const data = AuthAction.signInRequest({ login: 'jeseias' })

    expect(data).toEqual({
      type: AuthActionTypes.SIGN_IN_REQUEST,
      payload: { login: 'jeseias' }
    })
  })
})
