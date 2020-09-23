import { testSaga } from "redux-saga-test-plan";
import { fork } from "redux-saga/effects";

import heroesSaga from "store/reducers/heroes/saga";

import rootSaga from "./saga";

describe("rootSaga", () => {
  it("should yield all forked sagas", () => {
    const saga = testSaga(rootSaga);

    saga
      .next()
      .all([fork(heroesSaga)])
      .next()
      .isDone();
  });
});
