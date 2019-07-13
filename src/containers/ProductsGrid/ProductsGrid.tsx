import cn from "classnames";
import React, { FC } from "react";

import { ProductCard} from "@components";
import { MESSAGES } from "@config/i18n";

import c from "./ProductsGrid.scss";
import { IProps } from "./types";

const getTitle = (props: IProps, key: string) =>
  props.intl.formatMessage({
    defaultMessage: MESSAGES[`lookbook.${key}`],
    id: key,
  });

export const ProductsGrid: FC<IProps> = props => (
  <ul className={c.container}>
    {props.bagsKeys.map((key, idx) => (
      <li
        key={key}
        className={cn(c.productCard, idx % 2 && c.even)}
      >
        <ProductCard
          id={key}
          title={getTitle(props, key)}
          thumbnail={props.bags[key].thumbnail}
        />
      </li>
    ))}
  </ul>
);
