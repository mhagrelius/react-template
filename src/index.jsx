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
if (import.meta.env.MODE === "development") {
  const startMockServiceWorker = async () => {
    const { worker } = await import("./mocks/browser")
    await worker.start()
  }

  startMockServiceWorker()
}
