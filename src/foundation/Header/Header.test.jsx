import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("Header", () => {
  test("renders Header component", () => {
    render(<Header />);

    screen.getByText(/React-Koa Experiment/);
  });
});
