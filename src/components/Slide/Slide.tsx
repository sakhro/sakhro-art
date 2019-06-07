import React, { FC } from "react";

import c from "./Slide.scss";

export const Slide: FC = props => (
  <div className={c.container}>
    {props.children}
  </div>
);
