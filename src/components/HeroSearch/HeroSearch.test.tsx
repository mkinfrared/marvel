import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import HeroSearch from "./HeroSearch";

jest.mock("ui/Image", () => () => "<Image />");

describe("<HeroSearch />", () => {
  const Component = (
    <MemoryRouter>
      <HeroSearch />
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
