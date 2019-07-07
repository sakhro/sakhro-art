import cn from "classnames";
import React, { FC } from "react";

import { ProductCard } from "@components";

import c from "./LookbookPage.scss";
import { IProps } from "./types";

export const LookbookPage: FC<IProps> = props => (
  <section>
    <ul className={c.container}>
      {props.products.map((product, idx) => (
        <li
          key={product}
          className={cn(c.productCard, idx % 2 && c.even )}
        >
          <ProductCard />
        </li>
      ))}
    </ul>
  </section>
);

LookbookPage.defaultProps = {
  products: [
    "1",
    "2",
    "3",
  ],
};
