import React, { FC, Fragment } from "react";

import { ProductsGrid, SEO } from "@containers";

import { BAGS_DATA, BAGS_KEYS } from "@constants/lookbook";

export const LookbookPage: FC = () => (
  <Fragment>
    <SEO image={BAGS_DATA[BAGS_KEYS[0]].thumbnail} />
    <section>
      <ProductsGrid />
    </section>
  </Fragment>
);
