import React, { FC, Fragment, memo } from "react";
import { defineMessages, InjectedIntlProps } from "react-intl";
import { RouteComponentProps } from "react-router";

import { Img } from "@components";
import { LOOKBOOK } from "@constants/url";
import { Footer } from "@containers";

import { HomeMain } from "@static/images";
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
    <section>
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
    </section>
  );
});
