import React, { FC } from "react";
import { defineMessages, FormattedMessage, InjectedIntlProps } from "react-intl";

import { Img, Typography } from "@components";

import { DEFAULT_MESSAGES } from "@config/global";
import { Kenzo, OlesyaSakhro } from "@static/images";

import c from "./HistoryPage.scss";

const altText = defineMessages({
  olesyaSakhro: {
    defaultMessage: DEFAULT_MESSAGES["common.olesyaSakhro"],
    id: "common.olesyaSakhro",
  },
  sakhroKenzo: {
    defaultMessage: DEFAULT_MESSAGES["common.sakhroKenzo"],
    id: "common.sakhroKenzo",
  },
});

const paragraphs1 = [
  "history.parag1",
  "history.parag2",
  "history.parag3",
  "history.parag4",
];

const paragraphs2 = [
  "history.parag5",
  "history.parag6",
  "history.parag7",
];

export const HistoryPage: FC<InjectedIntlProps> = props => (
  <article className={c.container}>
    <Img
      src={Kenzo}
      imgClassName={c.sakhroKenzoImg}
      alt={props.intl.formatMessage(altText.sakhroKenzo)}
    />
    {paragraphs1.map((id: string) => (
      <Typography className={c.parag} key={id}>
        <FormattedMessage id={id} defaultMessage={DEFAULT_MESSAGES[id]} />
      </Typography>
    ))}
    <Img
      src={OlesyaSakhro}
      imgClassName={c.olesyaSakhroImg}
      alt={props.intl.formatMessage(altText.olesyaSakhro)}
    />
    {paragraphs2.map((id: string) => (
      <Typography className={c.parag} key={id}>
        <FormattedMessage id={id} defaultMessage={DEFAULT_MESSAGES[id]} />
      </Typography>
    ))}
  </article>
);
