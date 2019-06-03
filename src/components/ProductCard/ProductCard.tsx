import React, { FC, useCallback } from "react";

import { DotsPattern, Img, Typography } from "@components";

import { sophiaPrimary, sophiaSecondary } from "@static/images/bags/sophia";

import c from "./ProductCard.scss";

export const ProductCard: FC = () => {
  const renderDotsPattern = useCallback(() => (
    <DotsPattern />
  ), []);

  const renderPrimaryImg = useCallback(() => (
    <Img
      alt="bag"
      src={sophiaPrimary}
    />
  ), []);

  const renderSecondaryImg = useCallback(() => (
    <Img
      alt="bag"
      className={c.secondaryImg}
      src={sophiaSecondary}
    />
  ), []);

  const renderTitle = useCallback(() => (
    <Typography
      component="h2"
      className={c.cardTitle}
    >
      Sophia
    </Typography>
  ), []);

  return (
    <article className={c.container}>
      {renderDotsPattern()}
      {renderPrimaryImg()}
      {renderSecondaryImg()}
      {renderTitle()}
    </article>
  );
};
