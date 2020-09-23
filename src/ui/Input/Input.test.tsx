import { fireEvent, render } from "@testing-library/react";
import React from "react";

import { Input } from "./Input";

describe("<Input />", () => {
  const Component = Input;
  const value = "marklar";
  const label = "foobar";
  const forwardRef = jest.fn();
  const onChange = jest.fn();
  const props = { value, onChange, label, forwardRef };

  it("should be defined", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toMatchSnapshot();
  });

  it("should focus input when label is clicked", () => {
    const { container } = render(<Component {...props} />);
    const lbl = container.querySelector("label");
    const input = container.querySelector("input");

    fireEvent.click(lbl!);

    expect(input === document.activeElement).toBe(true);
  });
});
