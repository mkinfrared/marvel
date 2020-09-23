import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { heroMock } from "store/reducers/heroes/test/heroesMock";

import HeroesList from "./HeroesList";

jest.mock("ui/Image", () => () => "<Image />");

describe("<HeroesList />", () => {
  const heroes: any[] = [
    heroMock,
    { ...heroMock, id: 1 },
    { ...heroMock, id: 2 },
    { ...heroMock, id: 3 },
    { ...heroMock, id: 4 },
    { ...heroMock, id: 5 },
    { ...heroMock, id: 6 },
    { ...heroMock, id: 7 },
    { ...heroMock, id: 8 },
    { ...heroMock, id: 9 },
    { ...heroMock, id: 10 }
  ];

  const loading = true;
  const dispatch = jest.fn();
  const props = { loading, heroes, dispatch };

  const Component = (
    <MemoryRouter>
      <HeroesList {...props} />
    </MemoryRouter>
  );

  it("should be defined", () => {
    (window as any).innerWidth = 640;

    const { container } = render(Component);

    expect(container).toBeDefined();
  });

  it("should match the snapshot", () => {
    (window as any).innerWidth = 642;

    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
