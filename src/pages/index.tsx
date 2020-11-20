import {
  FaBook,
  FaPenAlt,
  FaShoppingCart,
  FaMobileAlt,
  FaDesktop
} from 'react-icons/fa'
import {
  FiSettings,
  FiBookOpen,
  FiBook,
  FiBookmark,
  FiUser,
  FiVideo,
  FiImage
} from 'react-icons/fi'
import {
  AddPostContainer,
  Container,
  HomeAsideLeft,
  HomeAsideRight,
  MainContent,
  RecommendBooksContainer,
  Separetor,
  TopBookBox
} from '../styles/pages/Home'

import CTAsideItem from '../components/CTAsideItem'
import PostActionButton from '../components/PostActionButton'

import { useSelector } from 'react-redux'
import { IAppState } from '../redux/store.types'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function Home(): JSX.Element {
  const router = useRouter()
  const { logged } = useSelector<IAppState, IAppState>(s => s)

  useEffect(() => {
    async function checkIfUserIsLogged() {
      if (!logged) {
        return router.push('/login')
      }
    }
    checkIfUserIsLogged()
  }, [router])

  return (
    <Container>
      <HomeAsideLeft>
        <CTAsideItem Icon={FaBook} text="Livros mais famosos" />
        <CTAsideItem Icon={FaPenAlt} text="Adicionar Livro" />
        <CTAsideItem Icon={FiSettings} text="Manager livros" />
        <Separetor />

        <CTAsideItem Icon={FaShoppingCart} text="Compra nossos livros" />
        <CTAsideItem Icon={FiBookOpen} text="Leia um livro" />
        <CTAsideItem Icon={FiBookmark} text="Livros para ler" />
        <CTAsideItem Icon={FiBook} text="Todos livros meus" />
        <Separetor />

        <CTAsideItem Icon={FaMobileAlt} text="Leia livros no seu fone" />
        <CTAsideItem Icon={FaDesktop} text="Baixe nosso App" />
      </HomeAsideLeft>

      <MainContent>
        <RecommendBooksContainer itemLength={10}>
          <TopBookBox></TopBookBox>
          <TopBookBox></TopBookBox>
          <TopBookBox></TopBookBox>
          <TopBookBox></TopBookBox>
          <TopBookBox></TopBookBox>
          <TopBookBox></TopBookBox>
          <TopBookBox></TopBookBox>
          <TopBookBox></TopBookBox>
          <TopBookBox></TopBookBox>
        </RecommendBooksContainer>

        <AddPostContainer>
          <img src="" alt="" />
          <textarea placeholder="Jeseias, O que tens em mente?"></textarea>
          <Separetor thin className="separator" bgColor="#242526" />
          <div className="cta">
            <PostActionButton
              text="Video ao vivo"
              icon={{ Icon: FiVideo, color: '#e03333' }}
            />
            <PostActionButton
              text="Foto/Video"
              icon={{ Icon: FiImage, color: '#3271ac' }}
            />
            <PostActionButton
              text="Foto/Video"
              icon={{ Icon: FiUser, color: '#e9db1f' }}
            />
          </div>
        </AddPostContainer>
      </MainContent>

      <HomeAsideRight></HomeAsideRight>
    </Container>
  )
}

// const Home: React.FC = () => {
//   const { logged } = useSelector<IAppState, IAppState>(s => s)

//   if (!logged) Router.push('/login')
//   return (
//     <Container>
//       <HomeAsideLeft>
//         <CTAsideItem Icon={FaBook} text="Livros mais famosos" />
//         <CTAsideItem Icon={FaPenAlt} text="Adicionar Livro" />
//         <CTAsideItem Icon={FiSettings} text="Manager livros" />
//         <Separetor />

//         <CTAsideItem Icon={FaShoppingCart} text="Compra nossos livros" />
//         <CTAsideItem Icon={FiBookOpen} text="Leia um livro" />
//         <CTAsideItem Icon={FiBookmark} text="Livros para ler" />
//         <CTAsideItem Icon={FiBook} text="Todos livros meus" />
//         <Separetor />

//         <CTAsideItem Icon={FaMobileAlt} text="Leia livros no seu fone" />
//         <CTAsideItem Icon={FaDesktop} text="Baixe nosso App" />
//       </HomeAsideLeft>

//       <MainContent>
//         <RecommendBooksContainer itemLength={10}>
//           <TopBookBox></TopBookBox>
//           <TopBookBox></TopBookBox>
//           <TopBookBox></TopBookBox>
//           <TopBookBox></TopBookBox>
//           <TopBookBox></TopBookBox>
//           <TopBookBox></TopBookBox>
//           <TopBookBox></TopBookBox>
//           <TopBookBox></TopBookBox>
//           <TopBookBox></TopBookBox>
//         </RecommendBooksContainer>

//         <AddPostContainer>
//           <img src="" alt="" />
//           <textarea placeholder="Jeseias, O que tens em mente?"></textarea>
//           <Separetor thin className="separator" bgColor="#242526" />
//           <div className="cta">
//             <PostActionButton
//               text="Video ao vivo"
//               icon={{ Icon: FiVideo, color: '#e03333' }}
//             />
//             <PostActionButton
//               text="Foto/Video"
//               icon={{ Icon: FiImage, color: '#3271ac' }}
//             />
//             <PostActionButton
//               text="Foto/Video"
//               icon={{ Icon: FiUser, color: '#e9db1f' }}
//             />
//           </div>
//         </AddPostContainer>
//       </MainContent>

//       <HomeAsideRight></HomeAsideRight>
//     </Container>
//   )
// }

export default Home
