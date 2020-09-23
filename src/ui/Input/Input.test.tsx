import { render } from "@testing-library/react";
import React from "react";

import { Input } from "./Input";

describe("<Input />", () => {
  const Component = Input;
  const value = "marklar";
  const onChange = jest.fn();
  const props = { value, onChange };

  it("should be defined", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toMatchSnapshot();
  });
});
