import React, { FC } from "react";

import { Typography } from "@components";

import c from "./PageTitle.scss";

export const PageTitle: FC = props => (
  <Typography
    component="h1"
    className={c.container}
  >
    {props.children}
  </Typography>
);
