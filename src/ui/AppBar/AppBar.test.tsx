import { render } from "@testing-library/react";
import React from "react";

import { AppBar } from "./AppBar";

describe("<AppBar />", () => {
  it("should be defined", () => {
    const { container } = render(<AppBar />);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(<AppBar />);

    expect(container).toMatchSnapshot();
  });
});
