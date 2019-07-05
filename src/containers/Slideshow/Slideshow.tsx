import cn from "classnames";
import React, { FC, Fragment, useState } from "react";
import SwipeableViews from "react-swipeable-views";

import { Bollets, Img } from "@components";

import c from "./Slideshow.scss";
import { IProps } from "./types";

export const Slideshow: FC<IProps> = props => {
  const [active, setActive] = useState(0);

  const onChangeIndex = (index: number) => {
    setActive(index);
  };

  return (
    <Fragment>
      <Bollets active={active} items={props.items} />
      <SwipeableViews
        enableMouseEvents
        index={active}
        onChangeIndex={onChangeIndex}
        className={cn(c.container, props.className)}
      >
        {props.items.map((item) => (
          <Img
            alt="test"
            key={item.id}
            src="https://via.placeholder.com/620x1000"
          />
        ))}
      </SwipeableViews>
    </Fragment>
  );
};

Slideshow.defaultProps = {
  items: [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ],
};
