import React from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroesListFC from "components/HeroesList";
import {
  selectHeroesList,
  selectHeroesLoading
} from "store/reducers/heroes/selectors";

const HeroesList = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(selectHeroesList);
  const loading = useSelector(selectHeroesLoading);

  return <HeroesListFC dispatch={dispatch} heroes={heroes} loading={loading} />;
};

export default React.memo(HeroesList);
