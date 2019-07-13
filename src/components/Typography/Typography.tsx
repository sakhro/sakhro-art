import cn from "classnames";
import React, { FC, memo, useMemo } from "react";

import { IProps } from "./types";
import c from "./Typography.scss";

const classNames = {
  h1: c.h1,
  h2: c.h2,
  p: c.p,
};

export const Typography: FC<IProps> = memo(props => {
  const Component = useMemo(() => (
    props.component || "p"
  ), [props.component]);

  return (
    <Component className={cn(classNames[props.component], props.className)}>
      {props.children}
    </Component>
  );
});
