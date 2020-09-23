import { render } from "@testing-library/react";
import React from "react";

import { PageLoading } from "./PageLoading";

describe("<PageLoading />", () => {
  const Component = PageLoading;

  it("should be defined", () => {
    const { container } = render(<Component />);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(<Component />);

    expect(container).toMatchSnapshot();
  });
});
