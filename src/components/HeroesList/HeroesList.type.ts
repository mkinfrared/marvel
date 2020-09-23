import { Dispatch } from "@reduxjs/toolkit";

import { fetchHeroesRequest } from "store/reducers/heroes/reducer";
import { Hero } from "store/reducers/heroes/types";

export interface HeroesListProps {
  dispatch: Dispatch<ReturnType<typeof fetchHeroesRequest>>;
  heroes: Hero[];
  loading: boolean;
}
