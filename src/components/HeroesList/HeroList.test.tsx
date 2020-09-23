import { render } from "@testing-library/react";
import React from "react";

import HeroesList from "./HeroesList";

describe("<HeroesList />", () => {
  const heroes: any[] = [];
  const loading = false;
  const dispatch = jest.fn();
  const props = { loading, heroes, dispatch };
  const Component = <HeroesList {...props} />;

  it("should be defined", () => {
    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
