import React from "react";
import { Link } from "react-router-dom";

import useWindowResize from "hooks/useWindowResize";
import { Pages } from "routes/Routes.type";
import Image from "ui/Image";

import css from "./HeroRow.module.scss";
import { HeroRowProps } from "./HeroRow.type";

const HeroRow = ({ description, id, imageSrc, name }: HeroRowProps) => {
  const page = useWindowResize();

  let loadWidth = 250;
  let loadHeight = 250;

  if (page.x < 641) {
    loadWidth = 380;

    loadHeight = 380;
  }

  return (
    <div className={css.HeroRow}>
      <div className={css.thumbnail}>
        <Image
          src={imageSrc || ""}
          loadWidth={loadWidth}
          loadHeight={loadHeight}
        />
      </div>
      <div className={css.info}>
        <Link to={Pages.HERO + id}>{name}</Link>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default React.memo(HeroRow);
