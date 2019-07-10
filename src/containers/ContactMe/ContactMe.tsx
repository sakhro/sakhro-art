import React from "react";
import { FormattedMessage } from "react-intl";

import { Link } from "@components";
import { DEFAULT_MESSAGES } from "@config/global";

import c from "./ContactMe.scss";

export const ContactMe = () => (
  <footer className={c.container}>
    <Link
      href="mailto:olesya.sakhro@gmail.com"
      className={c.contactLink}
    >
      <FormattedMessage id="common.askAbout" defaultMessage={DEFAULT_MESSAGES["common.askAbout"]} />
    </Link>
  </footer>
);
