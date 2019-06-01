import React, { FC } from "react";

import c from "./Hamburger.scss";

interface IProps {
  className?: string;
  onClick?: () => void;
}

export const Hamburger: FC<IProps> = props => (
    <button
      className={c.container}
      onClick={props.onClick}
    >
      <div className={c.topBar} />
      <div className={c.middleBar} />
      <div className={c.bottomBar} />
    </button>
  );
