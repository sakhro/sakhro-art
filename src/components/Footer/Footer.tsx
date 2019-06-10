import React, { FC } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Button, Typography } from "@components";

import c from "./Footer.scss";

interface IProps {
  label: string;
  onClick?: any;
}

export const Footer: FC<IProps> = props => (
  <footer className={c.wrapper}>
    <div className={c.container}>
      <Typography className={c.lookbook}>
        {props.label}
      </Typography>

      <Button
        onClick={props.onClick}
        className={c.button}
      >
        <IoIosArrowRoundForward className={c.arrowIcon} />
      </Button>
    </div>
  </footer>
);
