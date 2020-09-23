import React from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroDetailFC from "components/HeroDetail";
import { HeroDetailProps } from "components/HeroDetail/HeroDetail.type";
import { selectHero } from "store/reducers/heroes/selectors";

const HeroDetail = ({ id }: Pick<HeroDetailProps, "id">) => {
  const hero = useSelector(selectHero(id));
  const dispatch = useDispatch();

  return <HeroDetailFC {...hero} id={id} dispatch={dispatch} />;
};

export default React.memo(HeroDetail);
