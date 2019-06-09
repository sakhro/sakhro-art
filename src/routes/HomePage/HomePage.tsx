import React, { FC, Fragment, memo, useCallback } from "react";
import { defineMessages, InjectedIntlProps } from "react-intl";
import { RouteComponentProps } from "react-router";

import { Footer, Img } from "@components";

import { HomeMain } from "@static/images";

import { LOOKBOOK } from "@constants/url";

import c from "./HomePage.scss";

const messages = defineMessages({
  lookbook: {
    id: "lookbook",
  },
  olesyaSakhro: {
    id: "olesyaSakhro",
  },
});

export const HomePage: FC<InjectedIntlProps & RouteComponentProps> = memo((props) => {
  const onFooterButtonClick = useCallback(() => {
    props.history.push(LOOKBOOK);
  }, []);

  const renderFooter = useCallback(() => (
    <Footer
      label={props.intl.formatMessage(messages.lookbook)}
      onClick={onFooterButtonClick}
    />
  ), [onFooterButtonClick, messages.lookbook]);

  const renderMainContainer = useCallback(() => (
    <div className={c.container}>
      <Img
        customHeight
        src={HomeMain}
        alt={props.intl.formatMessage(messages.olesyaSakhro)}
        imgClassName={c.backgroundImg}
      />
    </div>
  ), [messages.olesyaSakhro, HomeMain]);

  return (
    <Fragment>
      {renderMainContainer()}
      {renderFooter()}
    </Fragment>
  );
});
