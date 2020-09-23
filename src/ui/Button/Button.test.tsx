import { render } from "@testing-library/react";
import React from "react";

import { Button } from "./Button";

describe("<Button />", () => {
  it("should be defined", () => {
    const { container } = render(<Button />);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });
});
