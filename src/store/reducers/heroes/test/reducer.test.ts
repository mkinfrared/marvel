import { heroesListMock, heroMock } from "./heroesMock";
import heroesReducer, {
  fetchHeroesRequest,
  fetchHeroesSuccess,
  fetchHeroRequest,
  fetchHeroSuccess
} from "../reducer";

describe("heroesReducer", () => {
  it("should be defined", () => {
    expect(heroesReducer).toBeDefined();
  });

  const initialState = heroesReducer(undefined, jest.fn() as any);

  it("should return state with loading set to true", () => {
    const result = heroesReducer(undefined, fetchHeroesRequest());

    expect(result.loading).toBe(true);
  });

  it("should return state with loading set to false, offset increased by 1 and updated list", () => {
    const result = heroesReducer(undefined, fetchHeroesSuccess(heroesListMock));

    expect(result.loading).toBe(false);
    expect(result.offset - initialState.offset).toBe(1);
    expect(result.list).toMatchObject(heroesListMock);
  });

  it("should return state with loading set to true on requested heroId", () => {
    const id = 42;
    const result = heroesReducer(undefined, fetchHeroRequest(id));

    expect(result.map[id].loading).toBe(true);
  });

  it("should return state with hero data on map object", () => {
    const result = heroesReducer(undefined, fetchHeroSuccess(heroMock as any));
    const { id } = heroMock;

    expect(result.map[id].loading).toBeUndefined();
    expect(result.map[id].name).toBe(heroMock.name);
    expect(result.map[id].comics).toMatchObject(heroMock.comics);
    expect(result.map[id].events).toMatchObject(heroMock.events);
    expect(result.map[id].stories).toMatchObject(heroMock.stories);
    expect(result.map[id].series).toMatchObject(heroMock.series);
  });
});
