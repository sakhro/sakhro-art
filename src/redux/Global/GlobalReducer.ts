import { createReducer } from "@services/reduxHelpers";
import { globalTypes } from "./GlobalActions";

const initialState: IGlobalState = {
  nav: {
    isVisible: false,
  },
};

export default createReducer(initialState, {
  [globalTypes.SHOW_NAV_INIT]: () => ({
    nav: {
      isVisible: true,
    },
  }),

  [globalTypes.HIDE_NAV_INIT]: () => ({
    nav: {
      isVisible: false,
    },
  }),
});
