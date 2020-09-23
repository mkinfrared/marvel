import { render } from "@testing-library/react";
import React from "react";

import Card from "./Card";

jest.mock("ui/Image", () => () => "<Image />");

describe("<Card />", () => {
  const Component = Card;
  const title = "marklar";
  const imageSrc = "foobar";
  const props = { title, imageSrc };

  it("should be defined", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toMatchSnapshot();
  });
});
