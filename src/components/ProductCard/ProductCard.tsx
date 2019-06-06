import React, { FC, useCallback } from "react";

import { DotsPattern, Img, Link, Typography } from "@components";

import { sophiaPrimary, sophiaSecondary } from "@static/images/bags/sophia";

import c from "./ProductCard.scss";

interface IProps {
  id?: string;
  primaryImg?: string;
  secondaryImg?: string;
  title?: string;
}

export const ProductCard: FC<IProps> = props => {
  const renderDotsPattern = useCallback(() => (
    <DotsPattern />
  ), []);

  const renderPrimaryImg = useCallback(() => (
    <Img
      alt="bag"
      src={props.primaryImg}
    />
  ), [props.primaryImg]);

  const renderSecondaryImg = useCallback(() => (
    <Img
      alt="bag"
      className={c.secondaryImg}
      src={props.secondaryImg}
    />
  ), [props.secondaryImg]);

  const renderTitle = useCallback(() => (
    <Typography
      component="h2"
      className={c.cardTitle}
    >
      {props.title}
    </Typography>
  ), [props.title]);

  const renderLink = useCallback(() => (
    <Link to={`lookbook/${props.id}`}>
      {renderPrimaryImg()}
      {renderSecondaryImg()}
    </Link>
  ), [renderPrimaryImg, renderSecondaryImg, props.id]);

  return (
    <article className={c.container}>
      {renderDotsPattern()}
      {renderLink()}
      {renderTitle()}
    </article>
  );
};

ProductCard.defaultProps = {
  id: "sophia",
  primaryImg: sophiaPrimary,
  secondaryImg: sophiaSecondary,
  title: "Sophia",
};
