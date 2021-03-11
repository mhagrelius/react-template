import { screen, render } from "@testing-library/react"
import App from "./App"

test("working", () => {
  expect(true).toBe(true)
  expect(process.env.NODE_ENV).toBe("test")
})

test("testing-library works", async () => {
  render(<App />)

  const el = screen.getByText(/hello/i)
  expect(el).toBeInTheDocument()
})

test("snapshots work", async () => {
  render(<App />)

  const testEl = screen.getByText(/Hello/i)
  expect(testEl).toMatchInlineSnapshot(`
    <h1>
      Hello, World!
    </h1>
  `)
})
