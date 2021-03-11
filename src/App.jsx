import React from "react"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello, World!</h1>
    </>
  )
}

export default App
