import cn from "classnames";
import React, { FC } from "react";

import c from "./Img.scss";

interface IProps {
  src: string;
  alt: string;
  className?: string;
}

export const Img: FC<IProps> = ({ className, ...other }) =>
  <img className={cn(c.container, className)} {...other} />;
