import React, { FC, memo, useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";

import { Hamburger, Typography } from "@components";

import { PAGE_TITLE } from "@config/global";
import { useScrollOffset } from "@services/hooks";

import c from "./Header.scss";

interface IProps {
  pageTitleKey: string;
  onHumburgerClick(): void;
}

export const Header: FC<IProps> = memo(props => {
  const scrollOffset = useScrollOffset();

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
    <Hamburger onClick={props.onHumburgerClick} />
  ), [props.onHumburgerClick]);

  return (
    <header className={c.container}>
      {renderTitle()}
      {renderHamburger()}
    </header>
  );
});
