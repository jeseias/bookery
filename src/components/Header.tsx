import { Header, SearchBox, InfoBox } from '../styles/components/Header'
import { FaBars, FaSearch } from 'react-icons/fa'

const HeaderComponent: React.FC = () => {
  return (
    <Header>
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
