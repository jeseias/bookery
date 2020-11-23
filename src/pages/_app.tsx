import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import Header from '../components/header'
import { wrapper } from '../redux/store'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(App)
