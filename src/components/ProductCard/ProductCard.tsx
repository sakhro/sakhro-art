import { interpolateNumber } from "d3-interpolate";
import React, { CSSProperties, PureComponent, Ref } from "react";

import { DotsPattern, Img, Link, Typography } from "@components";

import { sophiaPrimary, sophiaSecondary } from "@static/images/bags/sophia";

import { DOCUMENT_CENTER, DOCUMENT_HEIGHT } from "@constants/global";

import c from "./ProductCard.scss";

const HIGHT_PRIMARY_OPACITY = 1;
const HIGHT_SECONDARY_OPACITY = 0.33;
const LOW_OPACITY_VALUE = -0.7;

const secondaryI = interpolateNumber(HIGHT_SECONDARY_OPACITY, LOW_OPACITY_VALUE);
const primaryI = interpolateNumber(HIGHT_PRIMARY_OPACITY, LOW_OPACITY_VALUE);

interface IProps {
  id?: string;
  primaryImg?: string;
  secondaryImg?: string;
  title?: string;
}

interface IState {
  secondaryOpacity: number;
  primaryOpacity: number;
  isImgLoad: boolean;
  centerPosition: number;
}

export class ProductCard extends PureComponent<IProps, IState> {
  public static defaultProps: IProps;
  public state = {
    centerPosition: 50,
    isImgLoad: false,
    primaryOpacity: HIGHT_PRIMARY_OPACITY,
    secondaryOpacity: HIGHT_SECONDARY_OPACITY,
  };
  private containerRef: HTMLElement;

  public componentDidMount() {
    this.handleScroll();

    window.addEventListener("scroll", this.handleScroll, false);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  public render() {
    return (
      <article
        className={c.container}
        ref={this.handleContainerRef}
        style={this.getContainerStyle()}
      >
        {this.renderDots()}
        {this.renderLink()}
        {this.renderCardTitle()}
      </article>
    );
  }

  public renderCardTitle = () => (
    <Typography
      component="h2"
      className={c.cardTitle}
    >
      {this.props.title}
    </Typography>
  )

  private renderDots = () => (
    <DotsPattern style={this.getDotsPatternStyle()} />
  )

  private renderLink = () => (
    <Link to={`lookbook/${this.props.id}`}>
      <Img
        alt="bag"
        src={this.props.primaryImg}
        onImgLoad={this.onImgLoad}
      />
      <Img
        alt="bag"
        imgClassName={c.secondaryImg}
        src={this.props.secondaryImg}
        style={this.getSecondImgStyle()}
      />
    </Link>
  )

  private getContainerStyle = () => ({
    opacity: this.state.primaryOpacity,
  })

  private getDotsPatternStyle = (): CSSProperties => ({
    opacity: this.state.secondaryOpacity,
    transform: `translateY(${this.calculateCenterPosition() - 50}%)`,
  })

  private getSecondImgStyle = (): CSSProperties => ({
    opacity: this.state.secondaryOpacity,
    transform: `translateY(-${this.calculateCenterPosition() - 50}%)`,
  })

  private getElementDimentions = () =>
    this.containerRef.getBoundingClientRect()

  private getImageCenterPosition = () => {
    const { height, top } = this.getElementDimentions();

    return height / 2 + top;
  }

  private getOpacityValue = (centerPosition: number) => {
    const primaryValue = primaryI(Math.abs(centerPosition / DOCUMENT_HEIGHT));
    const secondaryValue = secondaryI(Math.abs(centerPosition / DOCUMENT_HEIGHT));

    const primaryOpacity = this.calculatePrimaryOpacity(primaryValue);
    const secondaryOpacity = this.calculateSecondaryOpacity(secondaryValue);

    return ({
      primaryOpacity,
      secondaryOpacity,
    });
  }

  private calculateCenterPosition = () =>
    this.state.centerPosition > 600
      ? 600
      : this.state.centerPosition

  private calculateSecondaryOpacity = (secondaryValue: number) =>
    secondaryValue >= HIGHT_SECONDARY_OPACITY
      ? HIGHT_SECONDARY_OPACITY
      : secondaryValue < LOW_OPACITY_VALUE
        ? LOW_OPACITY_VALUE
        : secondaryValue

  private calculatePrimaryOpacity = (primaryValue: number) =>
    primaryValue >= HIGHT_PRIMARY_OPACITY
      ? HIGHT_PRIMARY_OPACITY
      : primaryValue < LOW_OPACITY_VALUE
        ? LOW_OPACITY_VALUE
        : primaryValue

  private handleContainerRef = (ref: HTMLElement) => {
    this.containerRef = ref;
  }

  private handleScroll = () => {
    if (this.containerRef && this.state.isImgLoad) {
      const imgCenterPosition = this.getImageCenterPosition();

      if (imgCenterPosition <= DOCUMENT_CENTER) {
        const centerPosition = imgCenterPosition - DOCUMENT_CENTER;
        const { primaryOpacity, secondaryOpacity } = this.getOpacityValue(centerPosition);

        this.setState({
          centerPosition,
          primaryOpacity,
          secondaryOpacity,
        });
      } else {
        const centerPosition = DOCUMENT_CENTER - imgCenterPosition;
        const { primaryOpacity, secondaryOpacity } = this.getOpacityValue(centerPosition);

        this.setState({
          centerPosition: Math.abs(centerPosition),
          primaryOpacity,
          secondaryOpacity,
        });
      }
    }
  }

  private onImgLoad = () => {
    this.setState({ isImgLoad: true });
  }
}

ProductCard.defaultProps = {
  id: "sophia",
  primaryImg: sophiaPrimary,
  secondaryImg: sophiaSecondary,
  title: "Sophia",
};
