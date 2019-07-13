import { InjectedIntlProps } from "react-intl";

export interface IProps extends InjectedIntlProps {
  bagsKeys: string[];
  bags: Record<string, IBag>;
}
