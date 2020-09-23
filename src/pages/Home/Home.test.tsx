import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import Home from "./Home";

jest.mock("containers/HeroesList", () => () => "<HeroesList />");

describe("<Home />", () => {
  const Component = (
    <MemoryRouter>
      <Home />
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
