import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";

import { Hamburger, Nav, Typography } from "@components";

import c from "./Header.scss";

export const Header: FC<RouteComponentProps> = memo(props => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    if (props.location) {
      closeNav();
    }
  }, [props.location]);

  const closeNav = useCallback(() => {
    setIsNavVisible(false);
  }, []);

  const openNav = useCallback(() => {
    setIsNavVisible(true);
  }, []);

  return (
    <header className={c.container}>
      <Typography>
        OLESYA SAKHRO
      </Typography>
      <Hamburger onClick={openNav} />
      <Nav
        isVisible={isNavVisible}
        onClose={closeNav}
      />
    </header>
  );
});
