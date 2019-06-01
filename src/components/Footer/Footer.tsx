import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Typography, Button } from "@components";

import c from "./Footer.scss";

export const Footer = () => (
  <footer className={c.wrapper}>
    <div className={c.container}>
      <Typography>
        LOOKBOOK
      </Typography>

      <Button
        onClick={() => { }}
        className={c.button}
      >
        <IoIosArrowRoundForward className={c.arrowIcon} />
      </Button>
    </div>
  </footer>
);
