import { all } from "redux-saga/effects";

import { lookbookSaga } from "./Lookbook/LookbookSaga";

export default function* rootSaga() {
  yield all([
    lookbookSaga(),
  ]);
}
