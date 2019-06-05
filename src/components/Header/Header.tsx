import React, { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import { RouteComponentProps } from "react-router";

import { Hamburger, Nav, Typography } from "@components";
import { useScrollOffset } from "@services/hooks";

import c from "./Header.scss";

export const Header: FC<RouteComponentProps> = memo(props => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const scrollOffset = useScrollOffset();

  useEffect(() => {
    if (props.location) {
      closeNav();
    }
  }, [props.location]);

  const getTitlePosition = useMemo(() => {
    switch (true) {
      case scrollOffset < 50:
        return 0;
      case scrollOffset > 110:
        return 60;
      default:
        return scrollOffset - 49;
    }
  }, [scrollOffset]);

  const closeNav = useCallback(() => {
    setIsNavVisible(false);
  }, []);

  const openNav = useCallback(() => {
    setIsNavVisible(true);
  }, []);

  const titleWrapperStyles = useMemo(() => ({
    transform: `translateY(-${getTitlePosition}px)`,
  }), [getTitlePosition]);

  const renderTitle = useCallback(() => (
    <div
      className={c.titleWrapper}
      style={titleWrapperStyles}
    >
      <Typography className={c.primaryTitle}>
        OLESYA SAKHRO
      </Typography>
      <Typography className={c.primaryTitle}>
        HISTORY
      </Typography>
    </div>
  ), [titleWrapperStyles]);

  const renderHamburger = useCallback(() => (
    <Hamburger onClick={openNav} />
  ), [openNav]);

  const renderNav = useCallback(() => (
    <Nav
      isVisible={isNavVisible}
      onClose={closeNav}
    />
  ), [isNavVisible, closeNav]);

  return (
    <header className={c.container}>
      {renderTitle()}
      {renderHamburger()}
      {renderNav()}
    </header>
  );
});
