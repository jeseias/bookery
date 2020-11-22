import { IAuthStateStore, TAuthAction } from './auth/auth.types'

export interface IStoreState {
  auth: IAuthStateStore
}

export type TStoreAction = TAuthAction
