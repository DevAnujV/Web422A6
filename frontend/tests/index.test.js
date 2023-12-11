import About from "../pages/about.js";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("About Page", () => {
  test("renders the h1 element", () => {
    const { container } = render(<About />);

    const h1Element = container.querySelector("h1");

    expect(h1Element).toBeInTheDocument();
  });
});
