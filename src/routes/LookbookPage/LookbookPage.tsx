import React, { FC } from "react";
import { FormattedMessage, InjectedIntlProps } from "react-intl";

import { PageTitle, ProductCard } from "@components";

import c from "./LookbookPage.scss";

interface IProps {
  products: string[];
}

export const LookbookPage: FC<IProps & InjectedIntlProps> = props => (
  <section className={c.container}>
    <PageTitle>
      <FormattedMessage id="lookbook" />
    </PageTitle>
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
