import { InjectedIntlProps } from "react-intl";

export interface IProps extends InjectedIntlProps {
  title?: string;
  description?: string;
  image?: string;
}
