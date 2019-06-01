import React from "react";

import { Hamburger, Typography } from "@components";

import c from "./Header.scss";

export const Header = () => (
  <header className={c.container}>
    <Typography>
      OLESYA SAKHRO
    </Typography>
    <Hamburger />
  </header>
);
