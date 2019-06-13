import cn from "classnames";
import React, { FC, memo, useMemo } from "react";

import c from "./Button.scss";

interface IProps {
  className?: string;
  tabIndex?: number;
  onClick: any;
}

export const Button: FC<IProps> = memo(props => (
  <button
    onClick={props.onClick}
    tabIndex={props.tabIndex}
    className={cn(c.container, props.className)}
  >
    {props.children}
  </button>
));
