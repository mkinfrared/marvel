import {
  heroesListMock,
  heroMock
} from "store/reducers/heroes/test/heroesMock";
import {
  getHeroes,
  selectHero,
  selectHeroesList,
  selectHeroesLoading
} from "../selectors";
import reducer from "../reducer";

describe("heroes' selectors", () => {
  const initialState = reducer(undefined, jest.fn() as any);
  const store: any = {
    heroes: {
      ...initialState,
      list: heroesListMock,
      map: { [heroMock.id]: heroMock }
    }
  };

  it("should return heroes", () => {
    const result = getHeroes(store);

    expect(result).toBeDefined();
  });

  it("should return list from heroes", () => {
    const result = selectHeroesList(store);

    expect(result).toMatchObject(heroesListMock);
  });

  it("should return loading from heroes", () => {
    const result = selectHeroesLoading(store);

    expect(result).toBe(initialState.loading);
  });

  it("should return hero from heroes", () => {
    const result = selectHero(heroMock.id).resultFunc(store.heroes);

    expect(result).toBe(heroMock);
  });
});
