import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { FixedSizeList as List } from "react-window";

import useWindowResize from "hooks/useWindowResize";
import { fetchHeroesRequest } from "store/reducers/heroes/reducer";

import css from "./HeroesList.module.scss";
import { HeroesListProps } from "./HeroesList.type";
import Row from "./Row";

const HeroesList = ({ dispatch, heroes, loading }: HeroesListProps) => {
  const [size, setSize] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement | null>(null);
  const page = useWindowResize();

  const onEnterHandler = useCallback(() => {
    dispatch(fetchHeroesRequest());
  }, [dispatch]);

  const itemData = useMemo(
    () => ({
      heroes,
      onEnterHandler,
      loading
    }),
    [heroes, onEnterHandler, loading]
  );

  useEffect(() => {
    dispatch(fetchHeroesRequest());
  }, []);

  useEffect(() => {
    if (ref.current) {
      const { clientHeight, clientWidth } = ref.current;

      setSize({ x: clientWidth, y: clientHeight });
    }
  }, [page]);

  const itemSize = page.x < 641 ? 650 : 250;

  return (
    <div className={css.HeroesList} ref={ref}>
      <List
        height={size.y}
        width={size.x}
        itemCount={heroes.length}
        itemSize={itemSize}
        itemData={itemData}
      >
        {Row}
      </List>
    </div>
  );
};

export default React.memo(HeroesList);
