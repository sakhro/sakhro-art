import React, { FC } from "react";
import { Helmet } from "react-helmet";

import { MESSAGES } from "@config/i18n";
import { HistoryOlesyaSakhro } from "@static/images";

import { IProps } from "./types";

const getTitle = (props: IProps) =>
  props.intl.formatMessage({
    defaultMessage: MESSAGES[`common.${props.title}`],
    id: `common.${props.title}`,
  });

const getDescription = (props: IProps) =>
  props.intl.formatMessage({
    defaultMessage: MESSAGES[`common.${props.description}`],
    id: `common.${props.description}`,
  });

export const SEO: FC<IProps> = props => (
  <Helmet>
    <title>{getTitle(props)}</title>
    <meta name="description" content={getDescription(props)} />

    <meta property="og:title" content={getTitle(props)} />
    <meta property="og:description" content={getDescription(props)} />
    <meta property="og:image" content={props.image} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={getTitle(props)} />
    <meta name="twitter:image" content={props.image} />
    <meta name="twitter:description" content={getDescription(props)} />
  </Helmet>
);

SEO.defaultProps = {
  description: "websiteDescription",
  image: HistoryOlesyaSakhro,
  title: "websiteTitle",
};
