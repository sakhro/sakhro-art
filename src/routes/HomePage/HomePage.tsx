import React, { FC, memo } from "react";
import { FormattedMessage } from "react-intl";
import { RouteComponentProps } from "react-router";

import { Typography } from "@components";
import { MESSAGES } from "@config/i18n";
import { Slideshow } from "@containers";

import c from "./HomePage.scss";

export const HomePage: FC<RouteComponentProps> = memo(() => (
  <section className={c.container}>
    <Typography
      component="h1"
      className={c.title}
    >
      <FormattedMessage
        id="common.cultBags"
        defaultMessage={MESSAGES["common.cultBags"]}
      />
    </Typography>
    <Slideshow
      autoPlay
      className={c.slideshow}
      imgClassName={c.slideshowImg}
    />
  </section>
));
