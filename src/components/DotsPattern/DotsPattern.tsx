import cn from "classnames";
import React, { CSSProperties, FC } from "react";

import c from "./DotsPattern.scss";

interface IProps {
  style: CSSProperties;
  className?: string;
}

export const DotsPattern: FC<IProps> = props => (
  <div style={props.style} className={cn(c.container, props.className)} />
);
