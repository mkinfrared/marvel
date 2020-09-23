import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import Hero from "./Hero";

jest.mock("containers/HeroDetail", () => () => "<HeroDetail />");

describe("<Hero />", () => {
  const Component = (
    <MemoryRouter>
      <Hero />
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
