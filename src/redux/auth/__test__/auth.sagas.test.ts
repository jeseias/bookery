import { put } from 'redux-saga/effects'
import * as Actions from '../auth.actions'
import Types from '../auth.enums'
import { signIn } from '../auth.sagas'
import { IUser } from '../auth.types'

describe('Auth Sagas', () => {
  test('Get User from github', () => {
    const result = signIn(Actions.signInRequest({ login: 'jeseias' }))

    // const user: IUser = {
    //   avatar_url: 'image-location',
    //   bio: 'Some biografy',
    //   email: 'domingosjeseias@gmail.com',
    //   html_url: 'https://github.com/jeseias',
    //   name: 'Jeseias Domingos',
    //   twitter_username: 'jeseiasD'
    // }

    expect(result)
  })
})
