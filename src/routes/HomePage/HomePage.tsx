import React, { FC, memo } from "react";
import { FormattedMessage } from "react-intl";
import { RouteComponentProps } from "react-router";

import { Typography } from "@components";
import { Slideshow } from "@containers";

import c from "./HomePage.scss";

export const HomePage: FC<RouteComponentProps> = memo(() => (
  <section className={c.container}>
    <Typography
      component="h1"
      className={c.title}
    >
      <FormattedMessage id="cultBags" />
    </Typography>
    <Slideshow
      autoPlay
      className={c.slideshow}
      imgClassName={c.slideshowImg}
    />
  </section>
));
