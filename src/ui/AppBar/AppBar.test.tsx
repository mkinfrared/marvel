import { render } from "@testing-library/react";
import React from "react";

import { AppBar } from "./AppBar";

describe("<AppBar />", () => {
  const Component = <AppBar />;

  it("should be defined", () => {
    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
