import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import HeroRow from "./HeroRow";

jest.mock("ui/Image", () => () => "<Image />");

describe("<HeroRow />", () => {
  const id = 42;
  const name = "marklar";
  const description = "foobar";
  const props = { id, name, description };

  const Component = (
    <MemoryRouter>
      <HeroRow {...props} />
    </MemoryRouter>
  );

  it("should be defined", () => {
    (window as any).innerWidth = 640;

    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    (window as any).innerWidth = 642;

    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
