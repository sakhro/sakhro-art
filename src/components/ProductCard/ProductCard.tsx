import React, { FC } from "react";

import { Img, Link, Typography } from "@components";

import c from "./ProductCard.scss";
import { IProps } from "./types";

export const ProductCard: FC<IProps> = props => (
  <article className={c.container}>
    <Link to={`lookbook/${props.id}`}>
      <Img
        alt={props.title}
        src="https://via.placeholder.com/620x1000"
      />
    </Link>
    <Typography
      component="h2"
      className={c.title}
    >
      {props.title}
    </Typography>
  </article>
);

ProductCard.defaultProps = {
  id: "sophia",
  title: "Sophia",
};
