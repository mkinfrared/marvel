/* eslint-disable @typescript-eslint/no-empty-function,class-methods-use-this */
import { render } from "@testing-library/react";
import React from "react";

import { Image } from "./Image";

jest.mock("ui/ImagePlaceholder", () => () => "<ImagePlaceholder />");

describe("<Image />", () => {
  const Component = Image;
  const loadHeight = 42;
  const loadWidth = 47;
  const src = "marklar";
  const props = { loadHeight, loadWidth, src };

  beforeAll(() => {
    (global.IntersectionObserver as any) = class IntersectionObserver {
      constructor() {}

      disconnect() {
        return null;
      }

      observe() {
        return null;
      }

      takeRecords() {
        return null;
      }

      unobserve() {
        return null;
      }
    };
  });

  it("should be defined", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toBeDefined();
  });

  it("match the snapshot", () => {
    const { container } = render(<Component {...props} />);

    expect(container).toMatchSnapshot();
  });
});
