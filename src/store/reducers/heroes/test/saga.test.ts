import { testSaga } from "redux-saga-test-plan";
import { call, fork } from "redux-saga/effects";
import {
  comicsMock,
  eventsMock,
  heroesListMock,
  heroMock,
  seriesMock,
  storiesMock
} from "store/reducers/heroes/test/heroesMock";
import marvelApi from "utils/marvelApi";
import { getHeroes } from "../selectors";
import heroesSaga, {
  fetchHero,
  fetchHeroComics,
  fetchHeroes,
  fetchHeroEvents,
  fetchHeroSeries,
  fetchHeroStories,
  watchFetchHero,
  watchFetchHeroes
} from "../saga";
import {
  fetchHeroesRequest,
  fetchHeroesSuccess,
  fetchHeroRequest,
  fetchHeroSuccess
} from "../reducer";

jest.mock("utils/marvelApi");

describe("hero saga", () => {
  const apiMock = marvelApi as jest.Mocked<typeof marvelApi>;

  it("should yield all watch sagas", () => {
    const saga = testSaga(heroesSaga);

    saga
      .next()
      .all([fork(watchFetchHeroes), fork(watchFetchHero)])
      .next()
      .isDone();
  });

  it("should yield takeLeading", () => {
    const saga = testSaga(watchFetchHeroes);

    saga.next().takeLeading(fetchHeroesRequest, fetchHeroes).next().isDone();
  });

  it("should dispatch fetchHeroesSuccess on successful request", () => {
    const saga = testSaga(fetchHeroes);
    const data = {
      data: {
        results: heroesListMock
      }
    };
    const limit = 42;
    const offset = 47;
    const mockStore = { limit, offset };

    saga
      .next()
      .select(getHeroes)
      .next(mockStore)
      .call(apiMock.get, "/characters", {
        params: { limit, offset: limit * offset }
      })
      .next({ data })
      .put(fetchHeroesSuccess(data.data.results))
      .next()
      .isDone();
  });

  it("should not dispatch fetchHeroesSuccess on failed request", () => {
    const saga = testSaga(fetchHeroes);
    const limit = 42;
    const offset = 47;

    const mockStore = { limit, offset };

    saga
      .next()
      .select(getHeroes)
      .next(mockStore)
      .call(apiMock.get, "/characters", {
        params: { limit, offset: limit * offset }
      })
      .next(Promise.reject())
      .isDone();
  });

  it("should yield takeEvery fetchHeroRequest", () => {
    const saga = testSaga(watchFetchHero);

    saga.next().takeEvery(fetchHeroRequest, fetchHero).next().isDone();
  });

  it("should dispatch fetchHeroSuccess", () => {
    const data = {
      data: {
        results: [heroMock]
      }
    };
    const saga = testSaga(fetchHero as any, { payload: 42 });

    saga
      .next()
      .call(apiMock, "/characters/42")
      .next({ data })
      .all([
        call(fetchHeroComics, 42),
        call(fetchHeroEvents, 42),
        call(fetchHeroSeries, 42),
        call(fetchHeroStories, 42)
      ])
      .next([comicsMock, eventsMock, seriesMock, storiesMock])
      .put(fetchHeroSuccess(heroMock as any))
      .next()
      .isDone();
  });

  it("should call marvelApi", () => {
    const saga = testSaga(fetchHeroComics, 42);
    const data = {
      data: {
        results: [eventsMock]
      }
    };

    saga.next().call(apiMock, "/characters/42/comics").next({ data }).isDone();
  });

  it("should call marvelApi", () => {
    const saga = testSaga(fetchHeroEvents, 42);
    const data = {
      data: {
        results: [eventsMock]
      }
    };

    saga.next().call(apiMock, "/characters/42/events").next({ data }).isDone();
  });

  it("should call marvelApi", () => {
    const saga = testSaga(fetchHeroSeries, 42);
    const data = {
      data: {
        results: [eventsMock]
      }
    };

    saga.next().call(apiMock, "/characters/42/series").next({ data }).isDone();
  });

  it("should call marvelApi", () => {
    const saga = testSaga(fetchHeroStories, 42);
    const data = {
      data: {
        results: [eventsMock]
      }
    };

    saga.next().call(apiMock, "/characters/42/stories").next({ data }).isDone();
  });
});
