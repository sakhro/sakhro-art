import React from "react";

import { Product } from "@containers";
import { getViewportHeight } from "@services/helpers";

import c from "./ProductPage.scss";

const getContainerStyles = () => ({
  height: `${getViewportHeight() - 60}px`,
});

export const ProductPage = () => (
  <section className={c.container} style={getContainerStyles()}>
    <Product />
  </section>
);
