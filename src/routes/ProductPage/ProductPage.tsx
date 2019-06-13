import React from "react";

import { ContactMe, Slideshow } from "@components";

import c from "./ProductPage.scss";

export const ProductPage = () => (
  <div className={c.container}>
    <Slideshow />
    <ContactMe />
  </div>
);
