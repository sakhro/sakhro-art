import React, { FC, memo } from "react";
import { FormattedMessage } from "react-intl";
import { RouteComponentProps } from "react-router";

import { Typography } from "@components";
import { MESSAGES } from "@config/i18n";
import { Slideshow } from "@containers";
import { getViewportHeight } from "@services/helpers";

import c from "./HomePage.scss";

const getContainerStyles = () => ({
  height: `${getViewportHeight() - 60}px`,
});

export const HomePage: FC<RouteComponentProps> = memo(() => (
  <section className={c.container} style={getContainerStyles()}>
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
