import React, { FC, useMemo } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FormattedMessage } from "react-intl";
import { RouteComponentProps } from "react-router-dom";

import { Button, Hamburger, Typography } from "@components";

import { PAGE_TITLE } from "@config/global";
import { useScrollOffset } from "@services/hooks";

import c from "./Header.scss";

interface IProps extends RouteComponentProps {
  pageTitleKey: string;
  isProductPage: boolean;
  showNav: () => void;
}

export const Header: FC<IProps> = props => {
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

  return (
    <header className={c.container}>
      {props.isProductPage && (
        <Button
          className={c.backButton}
          onClick={props.history.goBack}
        >
          <IoIosArrowRoundBack className={c.arrowIcon} />
        </Button>
      )}
      {!props.isProductPage && (
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
      )}
      <Hamburger onClick={props.showNav} />
    </header>
  );
};
