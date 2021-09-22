import React from "react"
import { screen } from "@testing-library/react"
import { render } from "./test-utils"
import { App } from "./App"

test("renders Dashboard", () => {
  render(<App />)
  const headerTitle = screen.getAllByText(/Dashboard/i)[0]
  expect(headerTitle).toBeInTheDocument()
})
