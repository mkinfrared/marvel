import { action } from "typesafe-actions";

import { HeroesActionTypes } from "store/reducers/heroes/types";

const fetchHeroes = () => action(HeroesActionTypes.FETCH_HEROES_REQUEST);

export { fetchHeroes };
