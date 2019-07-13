import React, { cloneElement, FC, Fragment, ReactElement, useState } from "react";

import { Header, Nav } from "@containers";
import { RouteComponentProps } from "react-router";

import { RouteTransition } from "@components";

import "@styles/app.scss";
import c from "./MainLayout.scss";

export const MainLayout: FC<RouteComponentProps> = props => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const onNavClose = () =>
    setIsNavVisible(false);

  const onNavOpen = () =>
    setIsNavVisible(true);

  return (
    <Fragment>
      <Header showNav={onNavOpen} />
      <Nav
        isVisible={isNavVisible}
        onClose={onNavClose}
      />
      <main className={c.main}>
        <RouteTransition location={props.location}>
          {cloneElement(
            props.children as ReactElement,
            { location: props.location },
          )}
        </RouteTransition>
      </main>
    </Fragment>
  );
};
