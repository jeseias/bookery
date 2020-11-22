import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import Header from '../components/Header'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
