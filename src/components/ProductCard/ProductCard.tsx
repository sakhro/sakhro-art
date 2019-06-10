import React, { FC } from "react";

import { DotsPattern, Img, Link, Typography } from "@components";

import { sophiaPrimary, sophiaSecondary } from "@static/images/bags/sophia";

import c from "./ProductCard.scss";

interface IProps {
  id?: string;
  primaryImg?: string;
  secondaryImg?: string;
  title?: string;
}

export const ProductCard: FC<IProps> = props => (
  <article className={c.container}>
    <DotsPattern />
    <Link to={`lookbook/${props.id}`}>
      <Img
        alt="bag"
        src={props.primaryImg}
      />
      <Img
        alt="bag"
        imgClassName={c.secondaryImg}
        src={props.secondaryImg}
      />
    </Link>
    <Typography
      component="h2"
      className={c.cardTitle}
    >
      {props.title}
    </Typography>
  </article>
);

ProductCard.defaultProps = {
  id: "sophia",
  primaryImg: sophiaPrimary,
  secondaryImg: sophiaSecondary,
  title: "Sophia",
};
