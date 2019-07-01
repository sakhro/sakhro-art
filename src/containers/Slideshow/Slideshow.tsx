import React from "react";
import SwipeableViews from "react-swipeable-views";

import { Img, Slide } from "@components";

import { clientHeight } from "@constants/global";

const imgStyle = {
  height: clientHeight - 120,
  width: "100%",
};

export const Slideshow = () => (
  <SwipeableViews enableMouseEvents>
    <Slide>
      <Img
        style={imgStyle}
        src="https://via.placeholder.com/620x1200"
        alt="test"
      />
    </Slide>
    <Slide>
      <Img
        style={imgStyle}
        src="https://via.placeholder.com/620x1200"
        alt="test"
      />
    </Slide>
    <Slide>
      <Img
        style={imgStyle}
        src="https://via.placeholder.com/620x1200"
        alt="test"
      />
    </Slide>
  </SwipeableViews>
);
