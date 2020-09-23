import React from "react";
import { Waypoint } from "react-waypoint";
import { ListChildComponentProps } from "react-window";

import HeroRow from "components/HeroRow";
import Spinner from "ui/Spinner";

import css from "../HeroesList.module.scss";

const Row: React.FC<ListChildComponentProps> = ({ index, data, style }) => {
  const { heroes, onEnterHandler, loading } = data;
  const hero = heroes[index];
  const { thumbnail, ...rest } = hero;
  const imageSrc = `${thumbnail.path}.${thumbnail.extension}`;
  const showLoader = loading && index === heroes.length - 1;

  return (
    <div style={style}>
      <HeroRow imageSrc={imageSrc} {...rest} />
      {index === heroes.length - 4 && <Waypoint onEnter={onEnterHandler} />}
      {showLoader && (
        <div className={css.loading}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Row;
