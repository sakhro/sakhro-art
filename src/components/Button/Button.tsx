import cn from "classnames";
import React, { FC, memo, useMemo } from "react";

import c from "./Button.scss";

interface IProps {
  className?: string;
  tabIndex?: number;
  onClick: any;
}

export const Button: FC<IProps> = memo(props => {
  const className: string = useMemo(() => (
    cn(c.container, props.className)
  ), [props.className]);

  return (
    <button
      className={className}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </button>
  );
});
