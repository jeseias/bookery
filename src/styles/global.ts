import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.backgrounds.primary};

  }

  body, input, textarea, button {
    color: ${props => props.theme.colors.primary};
    font: 1.6rem sans-serif;
  }
`
