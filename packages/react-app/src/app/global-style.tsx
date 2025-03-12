import { createGlobalStyle } from 'styled-components'
import { ITheme } from './theme'

import shortStack from '../assets/fonts/ShortStack-Regular.ttf'

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  @font-face {
    font-family: "ShortStack";
    src: url("${shortStack}");
    font-style: normal;
  }

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'ShortStack', sans-serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, p {
  font-family: 'ShortStack', sans-serif;
  letter-spacing: normal;
  line-height: normal;
  margin: 0;
}

a {
  cursor: pointer;
  font-family: 'ShortStack', sans-serif;
}
`

export default GlobalStyle
