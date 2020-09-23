import { render } from "@testing-library/react";
import React from "react";

import { Button } from "./Button";

describe("<Button />", () => {
  const Component = <Button />;

  it("should be defined", () => {
    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
