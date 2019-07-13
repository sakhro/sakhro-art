import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import c from "./RouterLink.scss";
import { IProps } from "./types";

export const RouterLink: FC<IProps> = props => (
  <NavLink
    exact
    activeClassName={c.active}
    {...props}
  />
);
