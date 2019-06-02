import React, { FC, memo, useCallback } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FormattedMessage } from "react-intl";
import { RouteComponentProps } from "react-router";

import { Button, Typography } from "@components";

import { LOOKBOOK } from "@constants/url";

import c from "./Footer.scss";

export const Footer: FC<RouteComponentProps> = memo(props => {
  const onLookbookClick = useCallback(() => {
    props.history.push(LOOKBOOK);
  }, []);

  return (
    <footer className={c.wrapper}>
      <div className={c.container}>
        <Typography className={c.lookbook}>
          <FormattedMessage id="lookbook" />
        </Typography>

        <Button
          onClick={onLookbookClick}
          className={c.button}
        >
          <IoIosArrowRoundForward className={c.arrowIcon} />
        </Button>
      </div>
    </footer>
  );
});
