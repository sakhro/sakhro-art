import React, { FC, memo, useCallback } from "react";
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
    id: "parag1",
  },
  parag2: {
    id: "parag2",
  },
  parag3: {
    id: "parag3",
  },
  parag4: {
    id: "parag4",
  },
});

const paragraphs2: any = defineMessages({
  parag5: {
    id: "parag5",
  },
  parag6: {
    id: "parag6",
  },
  parag7: {
    id: "parag7",
  },
});

export const HistoryPage: FC<InjectedIntlProps> = memo(props => {
  const renderParagraph1 = useCallback(key => (
    <Typography className={c.parag} key={key}>
      {props.intl.formatMessage(paragraphs1[key])}
    </Typography>
  ), [paragraphs1]);

  const renderParagraph2 = useCallback(key => (
    <Typography className={c.parag} key={key}>
      {props.intl.formatMessage(paragraphs2[key])}
    </Typography>
  ), [paragraphs2]);

  const renderTitle = useCallback(() => (
    <PageTitle>
      <FormattedMessage id="history" />
    </PageTitle>
  ), []);

  const renderFirstImg = useCallback(() => (
    <Img
      src={Kenzo}
      className={c.sakhroKenzoImg}
      alt={props.intl.formatMessage(altText.sakhroKenzo)}
    />
  ), []);

  const renderFirstParags = useCallback(() => (
    Object.keys(paragraphs1).map(renderParagraph1)
  ), []);

  const renderSecondImg = useCallback(() => (
    <Img
      src={OlesyaSakhro}
      className={c.olesyaSakhroImg}
      alt={props.intl.formatMessage(altText.olesyaSakhro)}
    />
  ), []);

  const renderSecondParags = useCallback(() => (
    Object.keys(paragraphs2).map(renderParagraph2)
  ), []);

  return (
    <article className={c.container}>
      {renderTitle()}
      {renderFirstImg()}
      {renderFirstParags()}
      {renderSecondImg()}
      {renderSecondParags()}
    </article>
  );
});
