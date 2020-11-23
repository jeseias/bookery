import { Header, SearchBox, InfoBox } from '../styles/components/Header'
import { FaBars, FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { IStoreState } from '../redux/store.types'

const HeaderComponent: React.FC = () => {
  const { isHeaderVisible, user } = useSelector(
    (state: IStoreState) => state.auth
  )

  return (
    <Header visible={isHeaderVisible}>
      <FaBars size={30} color="#e4e6eb" />

      <SearchBox>
        <FaSearch size={20} color="#e4e6eb" />
        <input type="text" />
      </SearchBox>

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
