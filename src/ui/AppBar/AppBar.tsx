import React from "react";

import classes from "utils/classes";

import css from "./AppBar.module.scss";
import { AppBarProps } from "./AppBar.type";

const AppBar = ({ children, className }: AppBarProps) => {
  return <div className={classes(css.AppBar, className)}>{children}</div>;
};

export { AppBar };

export default React.memo(AppBar);
