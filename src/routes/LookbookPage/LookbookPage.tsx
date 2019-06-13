import React, { FC } from "react";
import { FormattedMessage, InjectedIntlProps } from "react-intl";

import { PageTitle, ProductCard } from "@components";

import c from "./LookbookPage.scss";

export const LookbookPage: FC<InjectedIntlProps> = () => (
  <section className={c.container}>
    <PageTitle>
      <FormattedMessage id="lookbook" />
    </PageTitle>
    <div className={c.productCard}>
      <ProductCard />
    </div>
    <div className={c.productCard}>
      <ProductCard />
    </div>
    <div className={c.productCard}>
      <ProductCard />
    </div>
    <div className={c.productCard}>
      <ProductCard />
    </div>
    <div className={c.productCard}>
      <ProductCard />
    </div>
  </section>
);
