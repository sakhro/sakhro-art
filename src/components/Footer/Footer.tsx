import React, { memo } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Button, Typography } from "@components";

import c from "./Footer.scss";

export const Footer = memo(() => (
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
));
