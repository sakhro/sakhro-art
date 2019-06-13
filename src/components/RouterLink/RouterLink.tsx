import React, { FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import c from "./RouterLink.scss";

interface IProps extends NavLinkProps {
  className?: string;
}

export const RouterLink: FC<IProps> = props => (
  <NavLink
    exact
    activeClassName={c.active}
    {...props}
  />
);
