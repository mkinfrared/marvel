import React from "react";

import HeroesList from "containers/HeroesList";

const Home = () => {
  return (
    <div>
      <HeroesList />
    </div>
  );
};

export default React.memo(Home);
