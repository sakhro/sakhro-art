import { RouteComponentProps } from "react-router";

import { BAGS_KEYS } from "@constants/lookbook";
import { HOME } from "@constants/url";

export const isHomePage = (route: RouteComponentProps) =>
  route.location.pathname === HOME;

export const isProductPage = (route: RouteComponentProps) => {
  const productId = route.location.pathname.split("/")[2];

  if (!productId) {
    return false;
  }

  return BAGS_KEYS.includes(productId);
};

export const getProdutKey = (route: RouteComponentProps) =>
  route.location.pathname.split("/")[2];

export const getPageKey = (route: RouteComponentProps) =>
  route.location.pathname.split("/")[1];
