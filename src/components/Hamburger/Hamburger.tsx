import React, { FC, memo } from "react";

import { Button } from "@components";

import c from "./Hamburger.scss";

interface IProps {
  className?: string;
  onClick: () => void;
}

export const Hamburger: FC<IProps> = memo(props => (
  <Button
    className={c.container}
    onClick={props.onClick}
  >
    <div className={c.topBar} />
    <div className={c.middleBar} />
    <div className={c.bottomBar} />
  </Button>
));
