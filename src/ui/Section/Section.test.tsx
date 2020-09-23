import { render } from "@testing-library/react";
import React from "react";

import Section from "./Section";

describe("<Section />", () => {
  const Component = Section;
  const title = "marklar";
  const children = "foobar";
  const props = { title, children };

  it("should be defined", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toMatchSnapshot();
  });
});
