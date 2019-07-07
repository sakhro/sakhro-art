import cn from "classnames";
import React, { FC } from "react";

import c from "./Bollets.scss";
import { IProps } from "./types";

export const Bollets: FC<IProps> = props => (
  <ul className={c.container}>
    {props.items.map((item, idx) => (
      <li
        key={item.id}
        className={cn(c.bollet, props.active === idx  && c.active)}
        onClick={props.onBolletClick(item.id)}
      />
    ))}
  </ul>
);
