export interface Heroes {
  list: Hero[];
  map: Record<number, Partial<Hero>>;
  offset: number;
  limit: number;
  loading: boolean;
}

export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics?: ComicBook[];
  events?: Event[];
  series?: Series[];
  stories?: Story[];
  loading?: boolean;
}

export interface ComicBook {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail;
}

export interface Series {
  id: number;
  title: string;
  description: string | null;
  thumbnail: Thumbnail;
}

export interface Story {
  id: number;
  title: string;
  description: string;
  thumbnail: Thumbnail | null;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export enum HeroesActionTypes {
  FETCH_HEROES_REQUEST = "@@heroes/FETCH_HEROES_REQUEST",
  FETCH_HEROES_SUCCESS = "@@heroes/FETCH_HEROES_SUCCESS",
  FETCH_HEROES_FAIL = "@@heroes/FETCH_HEROES_FAIL",
  FETCH_HERO_DETAIL_REQUEST = "@@heroes/FETCH_HERO_DETAIL_REQUEST",
  FETCH_HERO_DETAIL_SUCCESS = "@@heroes/FETCH_HERO_DETAIL_SUCCESS",
  FETCH_HERO_DETAIL_FAIL = "@@heroes/FETCH_HERO_DETAIL_FAIL"
}
