import {
  Header,
  SearchBox,
  InfoBox,
  Left,
  Center
} from '../../styles/components/Header'
import { FaBars, FaHome, FaSearch, FaUsers } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { IStoreState } from '../../redux/store.types'
import NavItem from './NavItem'
import { FiBook } from 'react-icons/fi'
import { INavItem } from '../../redux/nav/nav.types'

const HeaderComponent: React.FC = () => {
  const {
    auth: { isHeaderVisible, user },
    nav
  } = useSelector((state: IStoreState) => state)

  return (
    <Header visible={isHeaderVisible}>
      <Left>
        <FaBars size={30} color="#e4e6eb" />
        <SearchBox>
          <FaSearch size={20} color="#e4e6eb" />
          <input type="text" />
        </SearchBox>
      </Left>

      <Center length={Object.values(nav).length}>
        {Object.values(nav).map((item: INavItem) => (
          <NavItem
            key={item.text}
            Icon={item.Icon}
            text={item.text}
            active={item.active}
          />
        ))}
      </Center>

      <InfoBox>
        {user ? (
          <>
            <img src={user.avatar_url || ''} />
            <span>{user.name.split(' ')[0] || ''}</span>
          </>
        ) : null}
      </InfoBox>
    </Header>
  )
}

export default HeaderComponent
