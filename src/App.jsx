import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

import { Home } from "./pages/Home"

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
