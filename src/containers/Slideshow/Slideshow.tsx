import React from "react";
import SwipeableViews from "react-swipeable-views";

import { Slide } from "@components";

export const Slideshow = () => (
  <SwipeableViews enableMouseEvents>
    <Slide>
      Slide 1
    </Slide>
    <Slide>
      Slide 2
    </Slide>
    <Slide>
      Slide 3
    </Slide>
  </SwipeableViews>
);
