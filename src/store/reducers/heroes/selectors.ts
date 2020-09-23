import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "store/types";

const getHeroes = (state: AppState) => state.heroes;
const selectHeroesList = createSelector(getHeroes, ({ list }) => list);
const selectHeroesLoading = createSelector(getHeroes, ({ loading }) => loading);

const selectHero = (heroId: number) =>
  createSelector(getHeroes, ({ map }) => map[heroId]);

export { getHeroes, selectHeroesList, selectHeroesLoading, selectHero };
