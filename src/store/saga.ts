import { all, fork } from "redux-saga/effects";

import heroesSaga from "./reducers/heroes/saga";

function* rootSaga() {
  yield all([fork(heroesSaga)]);
}

export default rootSaga;
