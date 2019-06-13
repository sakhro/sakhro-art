import React, { FC, Fragment, memo } from "react";
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
  const onFooterButtonClick = () => {
    props.history.push(LOOKBOOK);
  };

  return (
    <Fragment>
      <div className={c.container}>
        <Img
          customHeight
          src={HomeMain}
          alt={props.intl.formatMessage(messages.olesyaSakhro)}
          imgClassName={c.backgroundImg}
        />
      </div>
      <Footer
        label={props.intl.formatMessage(messages.lookbook)}
        onClick={onFooterButtonClick}
      />
    </Fragment>
  );
});
