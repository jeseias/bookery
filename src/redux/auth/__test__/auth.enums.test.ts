import { hasDuplicates } from '../../../utils/helpers'
import AuthActionTypes from '../auth.enums'

const authActionArray = Object.values(AuthActionTypes)

describe('Auth Action Types', () => {
  test(AuthActionTypes.SIGN_IN_REQUEST, () => {
    expect(AuthActionTypes.SIGN_IN_REQUEST).toBe('SIGN_IN_REQUEST')
  })

  test(AuthActionTypes.SIGN_IN_SUCCESS, () => {
    expect(AuthActionTypes.SIGN_IN_SUCCESS).toBe('SIGN_IN_SUCCESS')
  })

  test(AuthActionTypes.SIGN_IN_FAILURE, () => {
    expect(AuthActionTypes.SIGN_IN_FAILURE).toBe('SIGN_IN_FAILURE')
  })

  test(AuthActionTypes.SIGN_OUT_REQUEST, () => {
    expect(AuthActionTypes.SIGN_OUT_REQUEST).toBe('SIGN_OUT_REQUEST')
  })

  test('Length Of Auth Action Types', () => {
    expect(authActionArray.length).toBe(4)
  })

  test('No Duplicate Values In Auth Action Types', () => {
    expect(hasDuplicates(authActionArray)).toBe(false)
  })
})
