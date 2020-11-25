import { render, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import { makeStore } from '../redux/store'
import ReactDOM from 'react-dom'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

export const renderUI = async (component: ReactElement) => {
  return render(
    <Provider store={makeStore({})}>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </Provider>
  )
}
// export const renderUI = async (
//   component: ReactElement,
//   root: HTMLDivElement
// ) => {
//   return ReactDOM.render(
//     <Provider store={makeStore({})}>
//       <ThemeProvider theme={theme}>{component}</ThemeProvider>
//     </Provider>,
//     root
//   )
// }
