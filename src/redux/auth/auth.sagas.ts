import { call, takeLatest, all, put, takeEvery } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'
import * as AuthActions from './auth.actions'
import api from '../../services/api'
import UserActionTypes from './auth.enums'
import { IUser } from './auth.types'

export function* signIn({
  payload
}: ActionType<typeof AuthActions.signInRequest>) {
  try {
    const { login } = payload

    const { data }: { data: IUser } = yield call(api.get, `/${login}`)
    const user = {
      name: data.name,
      email: data.email,
      avatar_url: data.avatar_url,
      bio: data.bio,
      html_url: data.html_url,
      twitter_username: data.twitter_username
    }

    console.log(user)

    yield put({ type: UserActionTypes.SIGN_IN_SUCCESS, payload: { user } })
  } catch (error) {}
}

// export default all([takeLatest(UserActionTypes.SIGN_IN_REQUEST, signIn)])

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* mySaga() {
  yield takeLatest(UserActionTypes.SIGN_IN_REQUEST, signIn)
}
