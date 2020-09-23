import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import { Pages } from "routes/Routes.type";

import Routes from "./Routes";

jest.mock("pages/Home", () => () => "<Home />");

jest.mock("pages/Hero", () => () => "<Hero />");

jest.mock("pages/NotFound", () => () => "<NotFound />");

describe("<Routes />", () => {
  const history = createMemoryHistory();

  const Component = (
    <Router history={history}>
      <Routes />
    </Router>
  );

  it("should be defined", () => {
    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should render Home page", async () => {
    const { findByText } = render(Component);
    const homePage = await findByText(/home/i);

    expect(homePage).toBeDefined();
  });

  it("should render Hero page", async () => {
    history.push(Pages.HERO + 42);

    const { findByText } = render(Component);
    const heroPage = await findByText(/hero/i);

    expect(heroPage).toBeDefined();
  });

  it("should render NotFound page", async () => {
    history.push("/404");

    const { findByText } = render(Component);
    const notFoundPage = await findByText(/notFound/i);

    expect(notFoundPage).toBeDefined();
  });
});
