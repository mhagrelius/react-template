import { StrictMode } from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"

import App from "./App"
import theme from "./theme"

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root"),
)

if (import.meta.hot) {
  import.meta.hot.accept()
}

async function startMockServiceWorker() {
  if (import.meta.env.MODE === "development") {
    const { worker } = await import("./mocks/browser")
    worker.start()
  }
}

startMockServiceWorker()
