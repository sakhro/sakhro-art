import React, { PureComponent } from "react";
import { FormattedMessage, InjectedIntlProps } from "react-intl";

import { PageTitle, ProductCard } from "@components";

import c from "./LookbookPage.scss";

interface IProps {
  products: string[];
}

export class LookbookPage extends PureComponent<IProps & InjectedIntlProps> {
  public static defaultProps: IProps;

  public render() {
    return (
      <section className={c.container}>
        <PageTitle>
          <FormattedMessage id="lookbook" />
        </PageTitle>
        {this.props.products.map(product => (
          <article
            key={product}
            className={c.productCard}
          >
            <ProductCard />
          </article>
        ))}
      </section>
    );
  }
}

LookbookPage.defaultProps = {
  products: [
    "1",
    "2",
    "3",
  ],
};
