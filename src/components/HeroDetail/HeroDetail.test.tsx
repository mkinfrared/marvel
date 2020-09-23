import { render } from "@testing-library/react";
import React from "react";

import {
  comicsMock,
  eventsMock,
  seriesMock,
  storiesMock
} from "store/reducers/heroes/test/heroesMock";

import HeroDetail from "./HeroDetail";

jest.mock("ui/Image", () => () => "<Image />");

describe("<HeroDetail />", () => {
  const id = 42;
  const name = "marklar";
  const dispatch = jest.fn();
  const thumbnail = { path: "foo/bar", extension: "bmp" };
  const comics = comicsMock as any;
  const events = eventsMock;
  const series = seriesMock;
  const stories = storiesMock;
  const props = { id, dispatch };
  const rest = { comics, events, series, stories, thumbnail, name };
  const Component = <HeroDetail {...props} />;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should be defined", () => {
    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should call dispatch from props when name is not defined", () => {
    render(Component);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it("should not call dispatch from props when name is defined", () => {
    const Comp = <HeroDetail {...props} {...rest} />;
    const { container } = render(Comp);
    const header = container.querySelector("h2");

    expect(dispatch).not.toHaveBeenCalled();

    expect(header).toBeDefined();
  });
});
