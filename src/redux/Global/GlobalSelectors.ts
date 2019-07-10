import { pathOr } from "ramda";
import { createSelector } from "reselect";

import { HISTORY, HOME, LOOKBOOK } from "@constants/url";

const getState = (state: IRootState) => state.global;

const location = (_: IRootState, props: any) => props.location;
const nav = (state: IRootState) => getState(state).nav;

export const currentRouteSelector = createSelector(
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

export const isHomePageSelector = createSelector(
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
        return "common.lookbook";
      case isHistoryPage:
        return "common.history";
      case isHomePage:
        return "commonhome"; // To handle nav close on route change
      default:
        return "common.missing";
    }
  },
);
