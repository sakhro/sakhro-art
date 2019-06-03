import cn from "classnames";
import React, { FC, memo, useMemo } from "react";

import c from "./Typography.scss";

type TextComponentType = "p" | "h1" | "h2";

interface IProps {
  component?: TextComponentType;
  className?: string;
}

const classNames = {
  h1: c.h1,
  h2: c.h2,
  p: c.p,
};

export const Typography: FC<IProps> = memo(props => {
  const Component = useMemo(() => (
    props.component || "p"
  ), [props.component]);

  const className = useMemo(() => (
    cn(classNames[props.component], props.className)
  ), [props.component, props.className]);

  return (
    <Component className={className}>
      {props.children}
    </Component>
  );
});
