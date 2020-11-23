import { IconType } from 'react-icons/lib'
import { NavItemContainer } from '../../styles/components/Header'

interface INavItemProps {
  Icon: IconType
  text: string
  active: boolean
}

const NavItem: React.FC<INavItemProps> = ({ Icon, text, active }) => {
  return (
    <NavItemContainer active={active}>
      <Icon size={25} />
      <span>{text}</span>
    </NavItemContainer>
  )
}

export default NavItem
