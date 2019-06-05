import React, { FC, memo, useCallback } from "react";
import { FormattedMessage, InjectedIntlProps } from "react-intl";

import { PageTitle, ProductCard } from "@components";

import c from "./LookbookPage.scss";

export const LookbookPage: FC<InjectedIntlProps> = memo(() => {
  const renderTitle = useCallback(() => (
    <PageTitle>
      <FormattedMessage id="lookbook" />
    </PageTitle>
  ), []);

  const renderProductCard = useCallback(() => (
    <div className={c.productCard}>
      <ProductCard />
    </div>
  ), []);

  return (
    <section className={c.container}>
      {renderTitle()}
      {renderProductCard()}
      {renderProductCard()}
    </section>
  );
});
