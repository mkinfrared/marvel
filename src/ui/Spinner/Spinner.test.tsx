import { render } from "@testing-library/react";
import React from "react";

import { Spinner } from "./Spinner";

describe("<Spinner />", () => {
  const Component = Spinner;

  it("should be defined", () => {
    const { container } = render(<Component />);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(<Component />);

    expect(container).toMatchSnapshot();
  });
});
