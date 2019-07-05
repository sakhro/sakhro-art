import { RouteComponentProps } from "react-router-dom";

export interface IProps extends RouteComponentProps {
  pageTitleKey: string;
  isHomePage: boolean;
  isProductPage: boolean;
  showNav: () => void;
}
