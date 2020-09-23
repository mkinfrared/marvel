import React from "react";

import Image from "ui/Image";

import css from "./Card.module.scss";
import { CardProps } from "./Card.type";

const Card = ({ imageSrc, title }: CardProps) => {
  return (
    <div className={css.Card}>
      <div className={css.image}>
        <Image src={imageSrc} loadHeight={300} loadWidth={200} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export { Card };

export default React.memo(Card);
