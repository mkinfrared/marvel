import { render } from "@testing-library/react";
import React from "react";

import Dropdown from "./Dropdown";

describe("<Dropdown />", () => {
  it("should be defined", () => {
    const { container } = render(<Dropdown />);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(<Dropdown />);

    expect(container).toMatchSnapshot();
  });
});
