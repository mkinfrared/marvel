import React from "react";

import css from "./Section.module.scss";
import { SectionProps } from "./Section.type";

const Section = ({ children, title }: SectionProps) => {
  return (
    <section className={css.Section}>
      <h4>{title}</h4>
      <hr />
      <div className={css.list}>{children}</div>
    </section>
  );
};

export default React.memo(Section);
