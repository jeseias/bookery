import { call, takeLatest, all, put } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'
import * as AuthActions from './auth.actions'
import api from '../../services/api'
import UserActionTypes from './auth.enums'

export function* signIn({
  payload
}: ActionType<typeof AuthActions.signInRequest>) {
  console.log('James Bond')
  try {
    const { login } = payload
    console.log(login)

    const { data } = yield call(api.get, `/${login}`)

    console.log(data)
  } catch (error) {}
}

export default all([takeLatest(UserActionTypes.SIGN_IN_REQUEST, signIn)])
