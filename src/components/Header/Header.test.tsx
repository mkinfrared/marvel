import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import Header from "./Header";

describe("<Header />", () => {
  const Component = (
    <MemoryRouter>
      <Header />
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
