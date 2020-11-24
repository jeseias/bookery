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

const HeaderComponent: React.FC = () => {
  const { isHeaderVisible, user } = useSelector(
    (state: IStoreState) => state.auth
  )

  return (
    <Header visible={isHeaderVisible}>
      <Left>
        <FaBars size={30} color="#e4e6eb" />
        <SearchBox>
          <FaSearch size={20} color="#e4e6eb" />
          <input type="text" />
        </SearchBox>
      </Left>

      <Center>
        <NavItem Icon={FaHome} text="Home" active={true} />
        <NavItem Icon={FaUsers} text="Users" active={false} />
        <NavItem Icon={FiBook} text="Users" active={false} />
        <NavItem Icon={FaHome} text="Posts" active={false} />
        <NavItem Icon={FaHome} text="Posts" active={false} />
      </Center>

      <InfoBox>
        {user ? (
          <>
            <img src={user.avatar_url} />
            <span>{user.name.split(' ')[0]}</span>
          </>
        ) : null}
      </InfoBox>
    </Header>
  )
}

export default HeaderComponent
