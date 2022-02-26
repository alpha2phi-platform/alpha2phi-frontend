import { render, screen } from "@testing-library/react";
import App from "./App";

test("that jest is working", () => {
  expect("hello world").toBe("hello world");
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
