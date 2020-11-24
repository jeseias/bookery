import { IconType } from 'react-icons'
import { ActionType } from 'typesafe-actions'
import * as NavAction from './nav.actions'

export type TNavAction = ActionType<typeof NavAction>

export interface INavItem {
  text: string
  Icon: IconType
  active: boolean
}

export interface INavState {
  home: INavItem
  books: INavItem
  users: INavItem
  posts: INavItem
}
