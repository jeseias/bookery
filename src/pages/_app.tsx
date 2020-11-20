import NextApp from 'next/app'

import { ThemeProvider } from 'styled-components'

import { wrapper } from '../redux/store'

import { useSelector } from 'react-redux'
import { IAppState } from '../redux/store.types'
import { useRouter } from 'next/router'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import { Header } from '../styles/components/Header'

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    )
  }
}

export default wrapper.withRedux(App)
