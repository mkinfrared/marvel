import { fireEvent, render } from "@testing-library/react";
import React from "react";

import { Search } from "./Search";

describe("<Search />", () => {
  const value = "marklar";
  const options = [{ name: "foobar" }];
  const getOptionLabel = jest.fn(({ name }) => name);
  const onInputChange = jest.fn();
  const onChange = jest.fn();
  const props = { value, getOptionLabel, onInputChange, options, onChange };
  const Component = <Search {...props} />;

  it("should be defined", () => {
    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should render <Dropdown /> when input is focused and options have length greater than 0", () => {
    const { container } = render(Component);
    const input = container.querySelector("input");

    let dropdown = container.querySelector(".dropdown");

    expect(dropdown).toBeNull();

    fireEvent.focus(input!);

    dropdown = container.querySelector(".dropdown");

    expect(dropdown).toBeDefined();
  });

  it("should render <Dropdown /> when input is focused and loading equals to true", () => {
    const Comp = <Search {...props} loading options={undefined} />;
    const { container } = render(Comp);
    const input = container.querySelector("input");

    let dropdown = container.querySelector(".dropdown");

    expect(dropdown).toBeNull();

    fireEvent.focus(input!);

    dropdown = container.querySelector(".dropdown");

    expect(dropdown).toBeDefined();
  });

  it("should hide <Dropdown /> when input is blurred", () => {
    const Comp = <Search {...props} loading options={undefined} />;
    const { container } = render(Comp);
    const input = container.querySelector("input");

    fireEvent.focus(input!);

    let dropdown = container.querySelector(".dropdown");

    expect(dropdown).toBeDefined();

    fireEvent.blur(input!);

    dropdown = container.querySelector(".dropdown");

    expect(dropdown).toBeNull();
  });

  it("should set input's value to clicked option text", () => {
    const { container } = render(Component);
    const input = container.querySelector("input");

    fireEvent.focus(input!);

    const option = container.querySelector("li");

    expect(option).toBeDefined();

    fireEvent.mouseDown(option!);

    expect(onInputChange).toHaveBeenCalledTimes(1);

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
