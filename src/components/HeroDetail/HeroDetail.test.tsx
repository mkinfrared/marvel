import { render } from "@testing-library/react";
import React from "react";

import HeroDetail from "./HeroDetail";

jest.mock("ui/Image", () => () => "<Image />");

describe("<HeroDetail />", () => {
  const id = 42;
  const dispatch = jest.fn();
  const props = { id, dispatch };
  const Component = <HeroDetail {...props} />;

  it("should be defined", () => {
    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
