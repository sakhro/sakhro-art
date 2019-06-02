import React, { Fragment, memo } from "react";

import { Footer, Img } from "@components";

import { HomeMain } from "@static/images";

import c from "./HomePage.scss";

export const HomePage = memo(() => (
  <Fragment>
    <div className={c.container}>
      <Img
        src={HomeMain}
        alt="Olesya Sakhro"
        className={c.backgroundImg}
      />
    </div>
    <Footer />
  </Fragment>
));
