import React from "react";
import { MdSend } from "react-icons/md";
import { FormattedMessage } from "react-intl";

import { Button, Typography } from "@components";

import c from "./ContactMe.scss";

export const ContactMe = () => (
  <footer className={c.wrapper}>
    <div className={c.container}>
      <Typography className={c.contact}>
        <FormattedMessage id="contactMe" />
      </Typography>

      <Button
        onClick={() => { }}
        className={c.button}
      >
        <MdSend className={c.contactIcon} />
      </Button>
    </div>;
  </footer>
);
