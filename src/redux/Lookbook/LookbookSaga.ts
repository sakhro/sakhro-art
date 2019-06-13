import { all, put, takeLatest } from "redux-saga/effects";

import { lookbookTypes } from "./LookbookActions";

function* getBagsSaga(action: IReduxAction) {
  const { responseSuccess, responseFailure, payload } = action;

  try {
    yield put(responseSuccess());
  } catch (err) {
    yield put(responseFailure());
  }
}

export function* lookbookSaga() {
  yield all([
    takeLatest(lookbookTypes.GET_BAGS_INIT, getBagsSaga),
  ]);
}
