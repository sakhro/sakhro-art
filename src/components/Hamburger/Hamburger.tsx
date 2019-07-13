import React, { FC } from "react";

import { Button } from "@components";

import c from "./Hamburger.scss";
import { IProps } from "./types";

export const Hamburger: FC<IProps> = props => (
  <Button
    className={c.container}
    onClick={props.onClick}
  >
    <div className={c.topBar} />
    <div className={c.middleBar} />
    <div className={c.bottomBar} />
  </Button>
);
