import { combineReducers } from "@reduxjs/toolkit";

import heroes from "./heroes/reducer";

const reducers = combineReducers({
  heroes
});

export default reducers;
