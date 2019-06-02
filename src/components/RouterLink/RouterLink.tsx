import React, { FC, memo } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import c from "./RouterLink.scss";

interface IProps extends NavLinkProps {
  className?: string;
}

export const RouterLink: FC<IProps> = memo(props => (
  <NavLink
    exact
    activeClassName={c.active}
    {...props}
  />
));
