import { pathOr } from "ramda";
import { createSelector } from "reselect";

import { HISTORY, HOME, LOOKBOOK } from "@constants/url";

const getState = (state: IRootState) => state.global;

const location = (_: IRootState, props: any) => props.location;
const nav = (state: IRootState) => getState(state).nav;

const currentRouteSelector = createSelector(
  location,
  ({ pathname }) => pathname,
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

const productIdSelector = createSelector(
  location,
  ({ pathname }) => pathOr(null, [2], pathname.split("/")), // Only for specific app routes
);

export const isNavVisibleSelector = createSelector(
  nav,
  ({ isVisible }) => isVisible,
);

export const isProductPageSelector = createSelector(
  productIdSelector,
  productId => !!productId,
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
