import React, { FC, useMemo } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FormattedMessage } from "react-intl";

import { Button, Hamburger, Typography } from "@components";

import { PAGE_TITLE } from "@config/global";
import { MESSAGES } from "@config/i18n";
import { interpolator } from "@services/helpers";
import { useScrollOffset } from "@services/hooks";

import c from "./Header.scss";
import { IProps } from "./types";

export const Header: FC<IProps> = props => {
  const scrollOffset = useScrollOffset();

  const opacity = useMemo(() => {
    switch (true) {
      case scrollOffset < 60:
        return interpolator(scrollOffset / 60, 0, 0.07);
      default:
        return interpolator(1, 0, 0.07);
    }
  }, [scrollOffset]);

  const containerStyle = useMemo(() => ({
    boxShadow: `0 5px 10px rgba(0, 0, 0, ${opacity})`,
  }), [opacity]);

  return (
    <header
      style={containerStyle}
      className={c.container}
    >
      {props.isProductPage && (
        <Button
          className={c.backButton}
          onClick={props.history.goBack}
        >
          <IoIosArrowRoundBack className={c.arrowIcon} />
        </Button>
      )}
      {!props.isProductPage && (
        <Typography component="h1" className={c.primaryTitle}>
          {props.isHomePage
            ? PAGE_TITLE
            : (
              <FormattedMessage
                id={props.pageTitleKey}
                defaultMessage={MESSAGES[props.pageTitleKey]}
              />
            )}
        </Typography>
      )}
      <Hamburger onClick={props.showNav} />
    </header>
  );
};
