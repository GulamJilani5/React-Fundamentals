import { render, screen } from "@testing-library/react";
import App from "./App";
test("render learn react link", () => {
  render(<App />);
  const linkEl = screen.getByText(/debounce/);
  expect(linkEl).toBeInTheDocument();
});
