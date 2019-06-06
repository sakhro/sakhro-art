import React, { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";

import { Hamburger, Nav, Typography } from "@components";

import { PAGE_TITLE } from "@config/global";
import { useScrollOffset } from "@services/hooks";

import c from "./Header.scss";

interface IProps {
  pageTitleKey: string;
}

export const Header: FC<IProps> = memo(props => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const scrollOffset = useScrollOffset();

  useEffect(() => {
    if (props.pageTitleKey) {
      closeNav();
    }
  }, [props.pageTitleKey]);

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
        {PAGE_TITLE}
      </Typography>
      <Typography className={c.primaryTitle}>
        <FormattedMessage
          id={props.pageTitleKey}
        />
      </Typography>
    </div>
  ), [titleWrapperStyles, props.pageTitleKey]);

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
