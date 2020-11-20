import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  BottomText,
  Button,
  Container,
  Input,
  LogoText
} from '.././styles/pages/Login'

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  function handleLoginInUser() {
    dispatch({ type: 'USER_FETCH_REQUESTED', payload: { login: username } })
  }

  return (
    <Container>
      <LogoText>
        <div>B</div>
        <p>Bookery</p>
      </LogoText>
      {/* <InfoText>
        Welcome to <b>Bookery</b> , read all books you want
      </InfoText> */}
      <Input
        type="text"
        placeholder="Github Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Button onClick={handleLoginInUser}>LOGIN</Button>
      <BottomText>
        Built by{' '}
        <a href="https://github.com/jeseias" target="_blank" rel="noreferrer">
          {' '}
          <b>Jeseias Domingos</b>.
        </a>
        Demo online library, while I master NextJS and Redux
      </BottomText>
    </Container>
  )
}

export default LoginPage
