import React, { FC } from "react";
import { defineMessages, FormattedMessage, InjectedIntlProps } from "react-intl";

import { Img, PageTitle, Typography } from "@components";

import { Kenzo, OlesyaSakhro } from "@static/images";

import c from "./HistoryPage.scss";

const altText = defineMessages({
  olesyaSakhro: {
    id: "olesyaSakhro",
  },
  sakhroKenzo: {
    id: "sakhroKenzo",
  },
});

const paragraphs1: any = defineMessages({
  parag1: {
    id: "history.parag1",
  },
  parag2: {
    id: "history.parag2",
  },
  parag3: {
    id: "history.parag3",
  },
  parag4: {
    id: "history.parag4",
  },
});

const paragraphs2: any = defineMessages({
  parag5: {
    id: "history.parag5",
  },
  parag6: {
    id: "history.parag6",
  },
  parag7: {
    id: "history.parag7",
  },
});

export const HistoryPage: FC<InjectedIntlProps> = props => (
  <article className={c.container}>
    <PageTitle>
      <FormattedMessage id="history" />
    </PageTitle>
    <Img
      src={Kenzo}
      imgClassName={c.sakhroKenzoImg}
      alt={props.intl.formatMessage(altText.sakhroKenzo)}
    />
    {Object.keys(paragraphs1).map((key: string) => (
      <Typography className={c.parag} key={key}>
        {props.intl.formatMessage(paragraphs1[key])}
      </Typography>
    ))}
    <Img
      src={OlesyaSakhro}
      imgClassName={c.olesyaSakhroImg}
      alt={props.intl.formatMessage(altText.olesyaSakhro)}
    />
    {Object.keys(paragraphs2).map((key: string) => (
      <Typography className={c.parag} key={key}>
        {props.intl.formatMessage(paragraphs2[key])}
      </Typography>
    ))}
  </article>
);
