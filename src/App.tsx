import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "components/Header";
import Routes from "routes";

import css from "./App.module.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className={css.App}>
        <Header />
        <main>
          <Routes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
