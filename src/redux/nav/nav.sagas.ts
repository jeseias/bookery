import { ActionType } from 'typesafe-actions'
import * as NavActions from './nav.actions'
import {  } from './nav.reducers'

export function* setNavItem({
  payload
}: ActionType<typeof NavActions.switchNav>) {
  const { navText } = payload


}
