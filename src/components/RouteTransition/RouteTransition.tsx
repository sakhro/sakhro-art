import cn from "classnames";
import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import c from "./RouteTransition.scss";

type PropsType = Pick<RouteComponentProps, "location">;

export const RouteTransition: FC<PropsType> = (props) => (
  <TransitionGroup>
    <CSSTransition
      key={props.location.key}
      classNames={cn(c.route, "route")}
      timeout={500}
    >
      {props.children}
    </CSSTransition>
  </TransitionGroup >
);
