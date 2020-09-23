import { render } from "@testing-library/react";
import React from "react";

import { Search } from "./Search";

describe("<Search />", () => {
  const Component = Search;
  const value = "marklar";
  const getOptionLabel = jest.fn();
  const onInputChange = jest.fn();
  const props = { value, getOptionLabel, onInputChange };

  it("should be defined", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toMatchSnapshot();
  });
});
