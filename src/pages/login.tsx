import { useEffect, useState } from 'react'
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

import { IStoreState } from '../redux/store.types'
import { useRouter } from 'next/router'
import AuthActionTypes from '../redux/auth/auth.enums'

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('')

  const dispatch = useDispatch()
  const { loading, isSignIn } = useSelector((state: IStoreState) => state.auth)
  const router = useRouter()

  function handleLoginInUser() {
    dispatch({
      type: AuthActionTypes.SIGN_IN_REQUEST,
      payload: { login: username }
    })
  }

  useEffect(() => {
    if (isSignIn) {
      router.push('/')
    }
  }, [isSignIn])

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
