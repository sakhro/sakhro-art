import React from "react";

import { ContactMe, Slideshow } from "@containers";

import c from "./ProductPage.scss";

export const ProductPage = () => (
  <div className={c.container}>
    <Slideshow />
    <ContactMe />
  </div>
);
