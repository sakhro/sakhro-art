import React from "react";

import { Product } from "@containers";

import c from "./ProductPage.scss";

export const ProductPage = () => (
  <section className={c.container}>
    <Product />
  </section>
);
