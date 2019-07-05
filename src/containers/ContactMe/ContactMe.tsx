import React from "react";
import { FormattedMessage } from "react-intl";

import { Link } from "@components";

import c from "./ContactMe.scss";

export const ContactMe = () => (
  <footer className={c.container}>
    <Link
      href="mailto:olesya.sakhro@gmail.com"
      className={c.contactLink}
    >
      <FormattedMessage id="askAbout" />
    </Link>
  </footer>
);
