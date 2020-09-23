import { render } from "@testing-library/react";
import React from "react";

import Card from "./Card";

jest.mock("ui/Image", () => () => "<Image />");

describe("<Card />", () => {
  const title = "marklar";
  const imageSrc = "foobar";
  const props = { title, imageSrc };
  const Component = <Card {...props} />;

  it("should be defined", () => {
    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
