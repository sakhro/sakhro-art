import React, { FC } from "react";

interface IProps extends IExternalLink {
  className?: string;
}

export const ExternalLink: FC<IProps> = props => (
  <a
    target="_blank"
    rel="nofollow noopener"
    {...props}
  >
    {props.children}
  </a>
);
