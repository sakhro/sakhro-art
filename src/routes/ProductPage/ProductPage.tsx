import React, { Fragment, memo } from "react";

import { ContactMe, Slideshow } from "@components";

import c from "./ProductPage.scss";

export const ProductPage = memo(() => (
  <div className={c.container}>
    <Slideshow />
    <ContactMe />
  </div>
));
