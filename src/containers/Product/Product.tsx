import React, { FC, Fragment } from "react";
import { RouteComponentProps } from "react-router";

import { BAGS_DATA } from "@constants/lookbook";
import { ContactMe, Slideshow } from "@containers";
import { getProdutKey } from "@services/navigation";

import c from "./Product.scss";

const getItems = (props: RouteComponentProps) =>
  BAGS_DATA[getProdutKey(props)].imgs.map(img => ({ id: img, src: img }));

export const Product: FC<RouteComponentProps> = props => (
  <Fragment>
    <Slideshow
      className={c.slideshow}
      imgClassName={c.slideshowImg}
      items={getItems(props)}
    />
    <ContactMe />
  </Fragment>
);
