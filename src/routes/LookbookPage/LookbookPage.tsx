import React, { FC, memo, useCallback } from "react";
import { FormattedMessage, InjectedIntlProps } from "react-intl";

import { ProductCard, Typography } from "@components";

import c from "./LookbookPage.scss";

export const LookbookPage: FC<InjectedIntlProps> = memo(() => {
  const renderTitle = useCallback(() => (
    <Typography
      component="h1"
      className={c.title}
    >
      <FormattedMessage id="lookbook" />
    </Typography>
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
