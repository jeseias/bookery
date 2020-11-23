import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import {
  BottomText,
  Button,
  Container,
  Input,
  LogoText,
  LoadingContainer
} from '.././styles/pages/Login'

import UserActionTypes from '../redux/auth/auth.enums'
import { IStoreState } from '../redux/store.types'

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()
  const { loading } = useSelector((state: IStoreState) => state.auth)

  function handleLoginInUser() {
    dispatch({
      type: UserActionTypes.SIGN_IN_REQUEST,
      payload: { login: username }
    })
  }

  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <SkeletonTheme color="#202020" highlightColor="#333">
            <Skeleton
              circle={true}
              width={90}
              height={90}
              style={{ display: 'block', margin: '22% auto 1rem auto' }}
            />
            <Skeleton width="10rem" />
          </SkeletonTheme>
        </LoadingContainer>
      ) : (
        <h1></h1>
      )}
      <LogoText>
        <div>B</div>
        <p>Bookery</p>
      </LogoText>
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
