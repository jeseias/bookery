import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IStoreState } from '../redux/store.types'

const PageCtrl: React.FC = () => {
  const router = useRouter()
  const { isSignIn } = useSelector((state: IStoreState) => state.auth)

  useEffect(() => {
    console.log(isSignIn)
    if (!isSignIn) {
      router.push('/login')
    } else {
      router.push('/home')
    }
  }, [isSignIn])
  return <></>
}

export default PageCtrl
