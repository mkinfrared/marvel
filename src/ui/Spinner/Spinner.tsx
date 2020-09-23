import React from "react";

import css from "./Spinner.module.scss";
import { SpinnerProps } from "./Spinner.type";

const Spinner = ({ size = 1 }: SpinnerProps) => {
  const side = 25 * size;

  const style = {
    width: side,
    height: side
  };

  return <div className={css.Spinner} style={style} />;
};

export { Spinner };

export default React.memo(Spinner);
