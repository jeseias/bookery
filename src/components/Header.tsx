import { Header, SearchBox, InfoBox } from '../styles/components/Header'
import { FaBars, FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { IStoreState } from '../redux/store.types'

const HeaderComponent: React.FC = () => {
  const { isHeaderVisible } = useSelector((state: IStoreState) => state.auth)

  return (
    <Header visible={isHeaderVisible}>
      <FaBars size={30} color="#e4e6eb" />

      <SearchBox>
        <FaSearch size={20} color="#e4e6eb" />
        <input type="text" />
      </SearchBox>

      <InfoBox>
        <p>10 books</p>
      </InfoBox>
    </Header>
  )
}

export default HeaderComponent
