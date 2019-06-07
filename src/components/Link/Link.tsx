import cn from "classnames";
import React, { FC, memo, useMemo } from "react";

import { ExternalLink, RouterLink } from "@components";

import c from "./Link.scss";

interface IProps {
  to?: string;
  href?: string;
  tabIndex?: number;
  className?: string;
  onClick?: any;
}

export const Link: FC<IProps> = memo(props => {
  const className = useMemo(() => (
    cn(c.container, props.className)
  ), [props.className]);

  const Component: any = useMemo(() => {
    switch (true) {
      case !!props.to:
        return RouterLink;
      default:
        return ExternalLink;
    }
  }, [props.to, props.href]);

  return (
    <Component {...props} className={className} />
  );
});
