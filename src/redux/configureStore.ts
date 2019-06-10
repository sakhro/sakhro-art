import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import globalReducer from "./Global/GlobalReducer";
import lookbookReducer from "./Lookbook/LookbookReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const reducers: Reducer<IRootState> = combineReducers({
  global: globalReducer,
  lookbook: lookbookReducer,
});

const rootStore = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export {
  rootStore,
};
