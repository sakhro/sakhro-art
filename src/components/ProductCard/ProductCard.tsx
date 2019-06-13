import { interpolateNumber } from "d3-interpolate";
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { DotsPattern, Img, Link, Typography } from "@components";

import { sophiaPrimary, sophiaSecondary } from "@static/images/bags/sophia";

import { DOCUMENT_CENTER, DOCUMENT_HEIGHT } from "@constants/global";

import c from "./ProductCard.scss";

const i = interpolateNumber(0.33, -0.5);

interface IProps {
  id?: string;
  primaryImg?: string;
  secondaryImg?: string;
  title?: string;
}

export const ProductCard: FC<IProps> = props => {
  const [isImgLoad, setIsImgLoad] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const [centerPosition, setCenterPosition] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [isImgLoad]);

  const handleScroll = useCallback(() => {
    if (containerRef.current && isImgLoad) {
      const { height, top } = containerRef.current.getBoundingClientRect();
      const imgCenterPosition = height / 2 + top;

      if (imgCenterPosition <= DOCUMENT_CENTER) {
        const position = imgCenterPosition - DOCUMENT_CENTER;
        const opacity = i(Math.abs(position / DOCUMENT_HEIGHT));

        setOpacity(opacity);
        setCenterPosition(position);
      } else {
        const position = DOCUMENT_CENTER - imgCenterPosition;
        const opacity = i(Math.abs(position / DOCUMENT_HEIGHT));

        setOpacity(opacity);
        setCenterPosition(Math.abs(position));
      }
    }
  }, [containerRef.current]);

  const dotsPatternStyle = useMemo(() => ({
    opacity,
    transform: `translateY(${centerPosition - 50}%)`,
  }), [centerPosition]);

  const secondImgStyle = useMemo(() => ({
    opacity,
    transform: `translateY(-${centerPosition - 50}%)`,
  }), [centerPosition]);

  const onImgLoad = useCallback(() => {
    setIsImgLoad(true);
  }, []);

  return (
    <article ref={containerRef} className={c.container}>
      <DotsPattern style={dotsPatternStyle} />
      <Link to={`lookbook/${props.id}`}>
        <Img
          alt="bag"
          src={props.primaryImg}
          onImgLoad={onImgLoad}
        />
        <Img
          alt="bag"
          imgClassName={c.secondaryImg}
          src={props.secondaryImg}
          style={secondImgStyle}
        />
      </Link>
      <Typography
        component="h2"
        className={c.cardTitle}
      >
        {props.title}
      </Typography>
    </article>
  );
};

ProductCard.defaultProps = {
  id: "sophia",
  primaryImg: sophiaPrimary,
  secondaryImg: sophiaSecondary,
  title: "Sophia",
};
