import { render } from "@testing-library/react";
import React from "react";

import App from "./App";

jest.mock("components/Header", () => () => "<Header />");

jest.mock("routes", () => () => "<Routes />");

describe("<App />", () => {
  it("should be defined", () => {
    const { container } = render(<App />);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
