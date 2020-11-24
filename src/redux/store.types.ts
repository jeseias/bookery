import { IAuthStateStore, TAuthAction } from './auth/auth.types'
import { INavState, TNavAction } from './nav/nav.types'

export interface IStoreState {
  auth: IAuthStateStore
  nav: INavState
}

export type TStoreAction = TAuthAction | TNavAction
