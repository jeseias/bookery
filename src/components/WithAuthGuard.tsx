import { NextPage } from 'next'
import Router, { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { IStoreState } from '../redux/store.types'

interface IWithAuthGuardProps {
  page: NextPage
}

const withAuthGuard: React.FC<IWithAuthGuardProps> = () => {
  const router = useRouter()
  const { isSignIn } = useSelector((state: IStoreState) => state.auth)

  if (!isSignIn) {
    Router.push('/login')
  }

  return (
    <>
      <h1>James Bond</h1>
    </>
  )
}

export default withAuthGuard
