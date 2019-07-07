import { CSSProperties } from "react";

export interface IProps {
  src: string;
  alt: string;
  fullWidth?: boolean;
  style?: CSSProperties;
  imgClassName?: string;
  customHeight?: boolean;
  onImgLoad?: () => void;
}
