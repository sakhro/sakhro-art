import React, { FC } from "react";

import { IProps } from "./types";

export const ExternalLink: FC<IProps> = props => (
  <a
    target="_blank"
    rel="nofollow noopener"
    {...props}
  >
    {props.children}
  </a>
);
