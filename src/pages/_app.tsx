import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Header from '../components/Header'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
