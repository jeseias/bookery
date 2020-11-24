import { IconType } from 'react-icons/lib'
import { useDispatch } from 'react-redux'
import { NavItemContainer } from '../../styles/components/Header'
import * as NavActions from '../../redux/nav/nav.actions'

interface INavItemProps {
  Icon: IconType
  text: string
  active: boolean
}

const NavItem: React.FC<INavItemProps> = ({ Icon, text, active }) => {
  const dispatch = useDispatch()

  function handleSetActive(text: string) {
    dispatch(NavActions.switchNav(text))
  }

  return (
    <NavItemContainer active={active} onClick={() => handleSetActive(text)}>
      <Icon size={25} />
      <span>{text}</span>
    </NavItemContainer>
  )
}

export default NavItem
