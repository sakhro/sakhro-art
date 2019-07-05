import { MouseEvent } from "react";

export interface IProps {
  className?: string;
  tabIndex?: number;
  onClick?: (e: MouseEvent) => void;
}
