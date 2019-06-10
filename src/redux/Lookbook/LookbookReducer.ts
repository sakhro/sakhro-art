import { createReducer } from "@services/reduxHelpers";
import { lookbookTypes } from "./LookbookActions";

const initialState: ILookbookState = {
  bags: [],
  isLoading: false,
};

export default createReducer(initialState, {
  [lookbookTypes.GET_BAGS_INIT]: () => ({
    isLoading: true,
  }),
});
