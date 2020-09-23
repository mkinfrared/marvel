import React from "react";

import Spinner from "ui/Spinner";
import classes from "utils/classes";

import css from "./Dropdown.module.scss";
import { DropdownProps } from "./Dropdown.type";

const Dropdown = ({ children, className, loading = false }: DropdownProps) => {
  const getContent = () => {
    if (loading) {
      return (
        <div className={css.loading}>
          <Spinner size={2} />
        </div>
      );
    }

    return <div className={css.list}>{children}</div>;
  };

  return <div className={classes(css.Dropdown, className)}>{getContent()}</div>;
};

export default React.memo(Dropdown);
