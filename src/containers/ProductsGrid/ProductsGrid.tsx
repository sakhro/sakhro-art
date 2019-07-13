import cn from "classnames";
import React, { FC } from "react";
import { InjectedIntlProps } from "react-intl";

import { ProductCard} from "@components";
import { MESSAGES } from "@config/i18n";
import { BAGS_DATA, BAGS_KEYS } from "@constants/lookbook";

import c from "./ProductsGrid.scss";

const getTitle = (props: InjectedIntlProps, key: string) =>
  props.intl.formatMessage({
    defaultMessage: MESSAGES[`lookbook.${key}`],
    id: `lookbook.${key}`,
  });

export const ProductsGrid: FC<InjectedIntlProps> = props => (
  <ul className={c.container}>
    {BAGS_KEYS.map((key, idx) => (
      <li
        key={key}
        className={cn(c.productCard, idx % 2 && c.even)}
      >
        <ProductCard
          id={key}
          title={getTitle(props, key)}
          thumbnail={BAGS_DATA[key].thumbnail}
        />
      </li>
    ))}
  </ul>
);
