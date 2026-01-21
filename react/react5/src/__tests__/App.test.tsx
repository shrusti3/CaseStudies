import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders NewsFleet heading", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /NewsFleet Dashboard/i })
  ).toBeInTheDocument();
});
