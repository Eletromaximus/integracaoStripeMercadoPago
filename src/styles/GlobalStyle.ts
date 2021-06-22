import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
  }

  ${normalize}
  html,
  body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
    /* cSpell:disable */
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
