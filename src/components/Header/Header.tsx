import React from "react";
import { Link } from "react-router-dom";

import HeroSearch from "components/HeroSearch";
import logo from "icons/MarvelLogo/icon.svg";
import { Pages } from "routes/Routes.type";
import AppBar from "ui/AppBar";

import css from "./Header.module.scss";

const Header = () => {
  return (
    <header className={css.Header}>
      <AppBar>
        <Link to={Pages.HOME}>
          <img src={logo} alt="logo" />
        </Link>
        <HeroSearch className={css.searchBox} />
      </AppBar>
    </header>
  );
};

export default React.memo(Header);
