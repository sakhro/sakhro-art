import React, { FC, Fragment, memo, useCallback } from "react";
import { defineMessages, InjectedIntlProps } from "react-intl";

import { Footer, Img } from "@components";

import { HomeMain } from "@static/images";

import { LOOKBOOK } from "@constants/url";

import c from "./HomePage.scss";

interface IProps extends InjectedIntlProps {
  push: any;
}

const messages = defineMessages({
  lookbook: {
    id: "lookbook",
  },
});

export const HomePage: FC<IProps> = memo((props) => {
  const onFooterButtonClick = useCallback(() => {
    props.push(LOOKBOOK);
  }, [props.push]);

  return (
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
        onClick={onFooterButtonClick}
      />
    </Fragment>
  );
});
