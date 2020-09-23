import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Hero, Heroes } from "./types";

const initialState: Heroes = {
  list: [],
  map: {},
  offset: 0,
  limit: 10,
  loading: false
};

const heroesSlice = createSlice({
  name: "@@heroes",
  initialState,
  reducers: {
    fetchHeroesRequest: (state) => {
      state.loading = true;
    },
    fetchHeroesSuccess: (state, action: PayloadAction<Hero[]>) => {
      const { list } = state;

      state.list = list.concat(action.payload);

      state.loading = false;

      state.offset++;
    },
    fetchHeroRequest: (state, action: PayloadAction<number>) => {
      state.map[action.payload] = {
        loading: true
      };
    },
    fetchHeroSuccess: (state, action: PayloadAction<Hero>) => {
      const { id } = action.payload;

      state.map[id] = { ...action.payload };
    }
  }
});

export const {
  fetchHeroesSuccess,
  fetchHeroesRequest,
  fetchHeroRequest,
  fetchHeroSuccess
} = heroesSlice.actions;

export default heroesSlice.reducer;
