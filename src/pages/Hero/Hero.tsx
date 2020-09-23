import React from "react";
import { useParams } from "react-router-dom";

import HeroDetail from "containers/HeroDetail";

type Params = {
  heroId: string;
};

const Hero = () => {
  const { heroId } = useParams<Params>();
  const id = parseInt(heroId, 0);

  return <HeroDetail id={id} />;
};

export default React.memo(Hero);
