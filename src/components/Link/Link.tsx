import cn from "classnames";
import React, { FC, memo, useMemo } from "react";

import { ExternalLink, RouterLink } from "@components";

import c from "./Link.scss";
import { IProps } from "./types";

export const Link: FC<IProps> = memo(props => {
  const Component: any = useMemo(() => {
    switch (true) {
      case !!props.to:
        return RouterLink;
      default:
        return ExternalLink;
    }
  }, [props.to, props.href]);

  return (
    <Component {...props} className={cn(c.container, props.className)} />
  );
});
