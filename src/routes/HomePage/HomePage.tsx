import React, { FC, Fragment, memo } from "react";
import { defineMessages, InjectedIntlProps } from "react-intl";

import { Footer, Img } from "@components";

import { HomeMain } from "@static/images";

// import { LOOKBOOK } from "@constants/url";

import c from "./HomePage.scss";

const messages = defineMessages({
  lookbook: {
    id: "lookbook",
  },
});

export const HomePage: FC<InjectedIntlProps> = memo((props) => (
  <Fragment>
    <div className={c.container}>
      <Img
        src={HomeMain}
        alt="Olesya Sakhro"
        className={c.backgroundImg}
      />
    </div>
    <Footer
      label={props.intl.formatMessage(messages.lookbook)}
    // onClick={() => { }}
    />
  </Fragment>
));
