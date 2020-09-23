import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Pages } from "routes/Routes.type";
import { loadablePage } from "utils/loadable";

const Home = loadablePage(() => import("pages/Home"));
const Hero = loadablePage(() => import("pages/Hero"));
const NotFound = loadablePage(() => import("pages/NotFound"));

const Routes = () => {
  return (
    <Switch>
      <Route exact path={Pages.HOME} component={Home} />
      <Route path={`${Pages.HERO}:heroId`} component={Hero} />
      <Route path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default React.memo(Routes);
