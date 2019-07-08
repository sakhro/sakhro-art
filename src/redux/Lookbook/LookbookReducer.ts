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
  [lookbookTypes.GET_BAGS_SUCCESS]: (_: ILookbookState, { payload }: IReduxAction<IBag[]>) => ({
    bags: payload,
    isLoading: false,
  }),
  [lookbookTypes.GET_BAGS_FAILURE]: () => ({
    isLoading: false,
  }),
});
