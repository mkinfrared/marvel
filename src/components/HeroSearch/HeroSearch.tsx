import debounce from "lodash/debounce";
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { Pages } from "routes/Routes.type";
import { Hero } from "store/reducers/heroes/types";
import Search from "ui/Search";
import marvelApi from "utils/marvelApi";

import { HeroSearchProps } from "./HeroSearch.type";

const HeroSearch = ({ className }: HeroSearchProps) => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const fetchHeroes = useCallback(
    debounce(async (searchValue: string) => {
      try {
        setLoading(true);

        const params = {
          nameStartsWith: searchValue,
          limit: 6
        };

        const response = await marvelApi.get("/characters", { params });
        const { results } = response.data.data;

        setHeroes(results);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    }, 350),
    []
  );

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);

      fetchHeroes(event.target.value);
    },
    []
  );

  const getOptionLabel = useCallback((option: Hero) => option.name, []);

  const handleChange = useCallback(
    (option: Hero) => {
      const route = Pages.HERO + option.id;

      history.push(route);
    },
    [history]
  );

  return (
    <Search
      className={className}
      onChange={handleChange}
      onInputChange={handleInputChange}
      getOptionLabel={getOptionLabel}
      options={heroes}
      loading={loading}
      value={inputValue}
    />
  );
};

export default React.memo(HeroSearch);
