import { Dispatch } from "@reduxjs/toolkit";

import { fetchHeroRequest } from "store/reducers/heroes/reducer";
import { Hero } from "store/reducers/heroes/types";

export type HeroDetailProps = Partial<Hero> & {
  id: number;
  dispatch: Dispatch<ReturnType<typeof fetchHeroRequest>>;
};
