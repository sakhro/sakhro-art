import cn from "classnames";
import React, { FC, Fragment, useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";

import { Bollets, Img } from "@components";

import c from "./Slideshow.scss";
import { IProps } from "./types";

export const Slideshow: FC<IProps> = props => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (props.autoPlay) {
      const interval = setInterval(() => {
        if (active + 1 === props.items.length) {
          setActive(0);
        } else {
          setActive(prevState => prevState + 1);
        }
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [active, props.autoPlay, props.items]);

  const onChangeIndex = (index: number) => {
    setActive(index);
  };

  const onBolletClick = (index: number) => () => {
    setActive(index - 1);
  };

  return (
    <Fragment>
      <Bollets
        active={active}
        items={props.items}
        onBolletClick={onBolletClick}
      />
      <SwipeableViews
        enableMouseEvents
        index={active}
        disabled={props.autoPlay}
        onChangeIndex={onChangeIndex}
        className={cn(c.container, props.className)}
      >
        {props.items.map((item) => (
          <Img
            alt="test"
            key={item.id}
            src={item.src}
            imgClassName={props.imgClassName}
          />
        ))}
      </SwipeableViews>
    </Fragment>
  );
};

Slideshow.defaultProps = {
  items: [
    { id: 1, src: "https://via.placeholder.com/620x1000" },
    { id: 2, src: "https://via.placeholder.com/820x1000" },
    { id: 3, src: "https://via.placeholder.com/620x1200" },
    { id: 4, src: "https://via.placeholder.com/720x800" },
  ],
};
