import React, { FC } from "react";

import { ProductCard } from "@components";

import c from "./LookbookPage.scss";
import { IProps } from "./types";

export const LookbookPage: FC<IProps> = props => (
  <section className={c.container}>
    {props.products.map(product => (
      <article
        key={product}
        className={c.productCard}
      >
        <ProductCard />
      </article>
    ))}
  </section>
);

LookbookPage.defaultProps = {
  products: [
    "1",
    "2",
    "3",
  ],
};
