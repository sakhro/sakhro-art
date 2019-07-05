import cn from "classnames";
import React, { FC, memo } from "react";

import c from "./Button.scss";
import { IProps } from "./types";

export const Button: FC<IProps> = memo(props => (
  <button
    onClick={props.onClick}
    tabIndex={props.tabIndex}
    className={cn(c.container, props.className)}
  >
    {props.children}
  </button>
));
