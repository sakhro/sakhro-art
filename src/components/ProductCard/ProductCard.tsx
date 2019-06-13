import { interpolateNumber } from "d3-interpolate";
import React, { CSSProperties, PureComponent, Ref } from "react";

import { DotsPattern, Img, Link, Typography } from "@components";

import { sophiaPrimary, sophiaSecondary } from "@static/images/bags/sophia";

import { DOCUMENT_CENTER, DOCUMENT_HEIGHT } from "@constants/global";

import c from "./ProductCard.scss";

const i = interpolateNumber(0.33, -0.7);

interface IProps {
  id?: string;
  primaryImg?: string;
  secondaryImg?: string;
  title?: string;
}

interface IState {
  opacity: number;
  isImgLoad: boolean;
  centerPosition: number;
}

export class ProductCard extends PureComponent<IProps, IState> {
  public static defaultProps: IProps;
  public state = {
    centerPosition: 0,
    isImgLoad: false,
    opacity: 0,
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
      >
        {this.renderDots()}
        {this.renderLink()}
        {this.renderCardTitle()}
      </article>
    );
  }

  private renderCardTitle = () => (
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

  private onImgLoad = () => {
    this.setState({ isImgLoad: true });
  }

  private getDotsPatternStyle = (): CSSProperties => ({
    opacity: this.state.opacity,
    transform: `translateY(${this.state.centerPosition - 50}%)`,
  })

  private getSecondImgStyle = (): CSSProperties => ({
    opacity: this.state.opacity,
    transform: `translateY(-${this.state.centerPosition - 50}%)`,
  })

  private handleContainerRef = (ref: HTMLElement) => {
    this.containerRef = ref;
  }

  private handleScroll = () => {
    if (this.containerRef && this.state.isImgLoad) {
      const { height, top } = this.containerRef.getBoundingClientRect();
      const imgCenterPosition = height / 2 + top;

      if (imgCenterPosition <= DOCUMENT_CENTER) {
        const centerPosition = imgCenterPosition - DOCUMENT_CENTER;
        const opacity = i(Math.abs(centerPosition / DOCUMENT_HEIGHT));

        this.setState({
          centerPosition,
          opacity,
        });
      } else {
        const centerPosition = DOCUMENT_CENTER - imgCenterPosition;
        const opacity = i(Math.abs(centerPosition / DOCUMENT_HEIGHT));

        this.setState({
          centerPosition: Math.abs(centerPosition),
          opacity,
        });
      }
    }
  }
}

ProductCard.defaultProps = {
  id: "sophia",
  primaryImg: sophiaPrimary,
  secondaryImg: sophiaSecondary,
  title: "Sophia",
};
