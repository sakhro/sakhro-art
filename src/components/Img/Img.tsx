import cn from "classnames";
import React, { FC, Fragment, useEffect, useMemo, useRef, useState } from "react";

import { getAspectRatio, getImageDimensions } from "@services/helpers";

import c from "./Img.scss";
import { IProps } from "./types";

export const Img: FC<IProps> = props => {
  const placeholderRef = useRef(null);
  const [src, setSrc] = useState<null | string>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setSrc(props.src);

      if (props.onImgLoad) {
        props.onImgLoad();
      }
    };
    img.src = props.src;
  }, [props.src, props.onImgLoad]);

  useEffect(() => {
    if (placeholderRef.current) {
      setWidth(placeholderRef.current.offsetWidth);
    }
  }, [placeholderRef.current]);

  const imgDimensions = useMemo(() => (
    getImageDimensions(props.src) || { width: 0, height: 0 }
  ), [props.src]);

  const aspectRatio = useMemo(() => (
    getAspectRatio(+imgDimensions.width, +imgDimensions.height) || 1
  ), [imgDimensions]);

  const height = useMemo(() => (
    width * aspectRatio
  ), [width, aspectRatio]);

  const placeholderStyle = useMemo(() => (
    props.customHeight
      ? { ...props.style }
      : { height: `${height}px`, ...props.style }
  ), [height, props.customHeight, props.style]);

  return (
    <Fragment>
      {!src && (
        <div
          ref={placeholderRef}
          style={placeholderStyle}
          className={cn(c.placeholder, props.imgClassName)}
        >
          <div className={c.loader} />
        </div>
      )}
      {!!src && (
        <img
          src={src}
          alt={props.alt}
          style={props.style}
          className={cn(c.img, props.imgClassName)}
        />
      )}
    </Fragment>
  );
};

Img.defaultProps = {
  customHeight: false,
};
