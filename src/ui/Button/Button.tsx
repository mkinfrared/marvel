import React from "react";

import css from "./Button.module.scss";
import { ButtonProps } from "./Button.type";

const Button = ({
  children,
  onClick,
  disabled = false,
  type = "button"
}: ButtonProps) => {
  return (
    <button
      className={css.Button}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };

export default React.memo(Button);
