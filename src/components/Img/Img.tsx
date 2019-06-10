import cn from "classnames";
import React, { FC, Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { getAspectRatio, getImageDimensions } from "@services/helpers";

import c from "./Img.scss";

interface IProps {
  src: string;
  alt: string;
  imgClassName?: string;
  customHeight?: boolean;
}

export const Img: FC<IProps> = props => {
  const placeholderRef = useRef(null);
  const [src, setSrc] = useState<null | string>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Create an custom img el
    const img = new Image();
    img.onload = () => {
      // On img load set change src state to display an img
      setSrc(props.src);
    };
    // Set img src to custom img el to load it lazy
    img.src = props.src;
  }, [props.src]);

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
      ? {}
      : { height: `${height}px` }
  ), [height, props.customHeight]);

  const renderImg = useCallback(() =>
    !!src && (
      <img
        src={src}
        alt={props.alt}
        className={cn(c.img, props.imgClassName)}
      />
    ), [src, props.alt]);

  const renderPlaceholder = useCallback(() =>
    !src && (
      <div
        ref={placeholderRef}
        style={placeholderStyle}
        className={cn(c.placeholder, props.imgClassName)}
      >
        <div className={c.loader} />
      </div>
    ), [src, placeholderStyle]);

  return (
    <Fragment>
      {renderPlaceholder()}
      {renderImg()}
    </Fragment>
  );
};

Img.defaultProps = {
  customHeight: false,
};
