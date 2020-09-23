import { fireEvent, render, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import { heroMock } from "store/reducers/heroes/test/heroesMock";
import marvelApi from "utils/marvelApi";

import HeroSearch from "./HeroSearch";

jest.mock("ui/Image", () => () => "<Image />");

jest.mock("utils/marvelApi");

describe("<HeroSearch />", () => {
  const apiMock = marvelApi as jest.Mocked<typeof marvelApi>;
  const history = createMemoryHistory();

  const Component = (
    <Router history={history}>
      <HeroSearch />
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

  it("should fetch heroes from marvel's api", async () => {
    const data = {
      data: {
        results: [heroMock]
      }
    };

    apiMock.get.mockReturnValueOnce(Promise.resolve({ data }));

    const { container } = render(Component);
    const input = container.querySelector("input");

    fireEvent.change(input!, { target: { value: "marklar" } });

    const params = { nameStartsWith: "marklar", limit: 6 };

    await waitFor(() => {
      expect(apiMock.get).toHaveBeenCalledWith("/characters", { params });
    });
  });

  it("should call push on history when option is clicked", async () => {
    const data = {
      data: {
        results: [heroMock]
      }
    };

    apiMock.get.mockReturnValueOnce(Promise.resolve({ data }));

    const { container, findByText } = render(Component);
    const input = container.querySelector("input");

    fireEvent.change(input!, { target: { value: "marklar" } });

    const params = { nameStartsWith: "marklar", limit: 6 };

    await waitFor(() => {
      expect(apiMock.get).toHaveBeenCalledWith("/characters", { params });
    });

    fireEvent.focus(input!);

    const spy = jest.spyOn(history, "push");
    const regex = new RegExp(heroMock.name, "i");
    const option = await findByText(regex);

    fireEvent.mouseDown(option);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
