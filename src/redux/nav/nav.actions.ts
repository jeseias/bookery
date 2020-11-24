import { action } from 'typesafe-actions'
import Types from './nav.enum'

export const switchNav = (navText: string) =>
  action(Types.SWITCH_NAV, { navText })
