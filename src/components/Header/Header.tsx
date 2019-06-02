import React, { memo, useCallback, useState } from "react";

import { Hamburger, Nav, Typography } from "@components";

import c from "./Header.scss";

export const Header = memo(() => {
  const [isNavVisible, setIsNavVisible] = useState(false);

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
