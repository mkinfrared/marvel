import {
  all,
  call,
  fork,
  put,
  select,
  takeEvery,
  takeLeading
} from "redux-saga/effects";

import marvelApi from "utils/marvelApi";

import {
  fetchHeroRequest,
  fetchHeroSuccess,
  fetchHeroesRequest,
  fetchHeroesSuccess
} from "./reducer";
import { getHeroes } from "./selectors";
import { ComicBook, Hero, Heroes } from "./types";

function* fetchHeroStories(heroId: number) {
  try {
    const response = yield call(marvelApi, `/characters/${heroId}/stories`);
    const { results } = response.data.data;

    return results;
  } catch (e) {}
}

function* fetchHeroSeries(heroId: number) {
  try {
    const response = yield call(marvelApi, `/characters/${heroId}/series`);
    const { results } = response.data.data;

    return results;
  } catch (e) {}
}

function* fetchHeroEvents(heroId: number) {
  try {
    const response = yield call(marvelApi, `/characters/${heroId}/events`);
    const { results } = response.data.data;

    return results;
  } catch (e) {}
}

function* fetchHeroComics(heroId: number) {
  try {
    const response = yield call(marvelApi, `/characters/${heroId}/comics`);
    const { results } = response.data.data;

    return results as ComicBook[];
  } catch (e) {}
}

function* fetchHero(action: ReturnType<typeof fetchHeroRequest>): unknown {
  const heroId = action.payload;

  try {
    const response = yield call(marvelApi, `/characters/${heroId}`);
    const { results } = response.data.data;
    const [hero] = results as Hero[];

    const [comics, events, series, stories] = yield all([
      call(fetchHeroComics, heroId),
      call(fetchHeroEvents, heroId),
      call(fetchHeroSeries, heroId),
      call(fetchHeroStories, heroId)
    ]);

    hero.comics = comics;

    hero.events = events;

    hero.series = series;

    hero.stories = stories;

    yield put(fetchHeroSuccess(hero));
  } catch (e) {}
}

function* watchFetchHero() {
  yield takeEvery(fetchHeroRequest, fetchHero);
}

function* fetchHeroes() {
  const heroesState: Heroes = yield select(getHeroes);
  const { limit, offset } = heroesState;
  const params = { limit, offset: offset * limit };

  try {
    const response = yield call(marvelApi.get, "/characters", { params });
    const { results } = response.data.data;

    yield put(fetchHeroesSuccess(results));
  } catch (e) {}
}

function* watchFetchHeroes() {
  yield takeLeading(fetchHeroesRequest, fetchHeroes);
}

function* heroesSaga() {
  yield all([fork(watchFetchHeroes), fork(watchFetchHero)]);
}

export default heroesSaga;

export {
  watchFetchHeroes,
  watchFetchHero,
  fetchHeroes,
  fetchHero,
  fetchHeroComics,
  fetchHeroEvents,
  fetchHeroStories,
  fetchHeroSeries
};
