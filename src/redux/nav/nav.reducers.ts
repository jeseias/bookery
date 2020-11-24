import { FaBook, FaHome, FaUsers } from 'react-icons/fa'
import { FiDatabase } from 'react-icons/fi'
import { INavItem, INavState, TNavAction } from './nav.types'
import Types from './nav.enum'

export const INITIAL_STATE: INavState = {
  home: {
    Icon: FaHome,
    text: 'Home',
    active: true
  },
  books: {
    Icon: FaBook,
    text: 'Books',
    active: false
  },
  users: {
    Icon: FaUsers,
    text: 'Users',
    active: false
  },
  posts: {
    Icon: FiDatabase,
    text: 'Posts',
    active: false
  }
}

export const navReducer = (
  state = INITIAL_STATE,
  action: TNavAction
): INavState => {
  switch (action.type) {
    case Types.SWITCH_NAV:
      return {
        ...state
      }
    default:
      return state
  }
}
