import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import NotFound from "./NotFound";

describe("<NotFound />", () => {
  const Component = (
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  it("should be defined", () => {
    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
