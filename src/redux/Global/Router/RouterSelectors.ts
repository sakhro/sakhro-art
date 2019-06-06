import { createSelector } from "reselect";

import { HISTORY, HOME, LOOKBOOK } from "@constants/url";

const getState = (state: { router: any; }) => state.router;

const location = (state: any) =>
  getState(state).location;

const currentRouteSelector = createSelector(
  location,
  location => location.pathname,
);

const isLookbookPageSelector = createSelector(
  currentRouteSelector,
  currentRoute => currentRoute === LOOKBOOK,
);

const isHistoryPageSelector = createSelector(
  currentRouteSelector,
  currentRoute => currentRoute === HISTORY,
);

const isHomePageSelector = createSelector(
  currentRouteSelector,
  currentRoute => currentRoute === HOME,
);

export const pageTitleKeySelector = createSelector(
  isLookbookPageSelector,
  isHistoryPageSelector,
  isHomePageSelector,
  (isLookbookPage, isHistoryPage, isHomePage) => {
    switch (true) {
      case isLookbookPage:
        return "lookbook";
      case isHistoryPage:
        return "history";
      case isHomePage:
        return "home"; // To handle nav close on route change
      default:
        return "missing";
    }
  },
);
