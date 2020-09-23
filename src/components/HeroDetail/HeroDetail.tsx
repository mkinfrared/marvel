/* eslint-disable no-shadow */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { fetchHeroRequest } from "store/reducers/heroes/reducer";
import { ComicBook, Event, Series, Story } from "store/reducers/heroes/types";
import Card from "ui/Card";
import Image from "ui/Image";
import Section from "ui/Section";
import Spinner from "ui/Spinner";

import css from "./HeroDetail.module.scss";
import { HeroDetailProps } from "./HeroDetail.type";

type Entity = ComicBook | Event | Series | Story;

const HeroDetail = ({
  comics,
  description,
  events,
  id,
  name,
  series,
  stories,
  thumbnail,
  dispatch
}: HeroDetailProps) => {
  const [width, setWidth] = useState(100);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!name) {
      dispatch(fetchHeroRequest(id));
    }
  }, [id]);

  useLayoutEffect(() => {
    if (ref.current) {
      setWidth(ref.current.clientWidth);
    }
  }, [name]);

  const getCard = (entity: Entity) => {
    const { id, title, thumbnail } = entity;
    const imageSrc = `${thumbnail?.path}.${thumbnail?.extension}`;

    return <Card key={id} imageSrc={imageSrc} title={title} />;
  };

  const renderData = () => {
    if (!name) {
      return (
        <div className={css.loading}>
          <Spinner />
        </div>
      );
    }

    const imageSrc = `${thumbnail?.path}.${thumbnail?.extension}`;
    const heroComicBooks = comics?.map(getCard);
    const heroEvents = events?.map(getCard);
    const heroSeries = series?.map(getCard);
    const heroStories = stories?.map(getCard);

    return (
      <>
        <h2>{name}</h2>
        <div className={css.image} ref={ref}>
          <Image src={imageSrc} loadWidth={width} loadHeight={width} />
        </div>
        <p>{description}</p>
        <Section title={`${name} comic books`}>{heroComicBooks}</Section>
        <Section title={`${name} events`}>{heroEvents}</Section>
        <Section title={`${name} series`}>{heroSeries}</Section>
        <Section title={`${name} stories`}>{heroStories}</Section>
      </>
    );
  };

  return <div className={css.HeroDetail}>{renderData()}</div>;
};

export default React.memo(HeroDetail);
