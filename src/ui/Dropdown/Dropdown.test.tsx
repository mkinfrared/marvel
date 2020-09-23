import { render } from "@testing-library/react";
import React from "react";

import Dropdown from "./Dropdown";

describe("<Dropdown />", () => {
  const Component = <Dropdown />;

  it("should be defined", () => {
    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should render list block with children", () => {
    const children = (
      <>
        <li>1</li>
        <li>2</li>
      </>
    );

    const Comp = <Dropdown>{children}</Dropdown>;
    const { container } = render(Comp);
    const list = container.querySelector(".list");
    const spinner = container.querySelector(".Spinner");

    expect(list).toBeInTheDocument();

    expect(list!.children).toHaveLength(2);

    expect(spinner).not.toBeInTheDocument();
  });

  it("should render a spinner", () => {
    const children = (
      <>
        <li>1</li>
        <li>2</li>
      </>
    );

    const Comp = <Dropdown loading>{children}</Dropdown>;
    const { container } = render(Comp);
    const list = container.querySelector(".list");
    const spinner = container.querySelector(".Spinner");

    expect(list).not.toBeInTheDocument();

    expect(spinner).toBeInTheDocument();
  });
});
