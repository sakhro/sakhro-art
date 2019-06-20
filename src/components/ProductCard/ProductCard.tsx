import cn from "classnames";
import React, { PureComponent } from "react";

import { DotsPattern, Img, Link, Typography } from "@components";

import { sophiaPrimary, sophiaSecondary } from "@static/images/bags/sophia";

import c from "./ProductCard.scss";

interface IProps {
  id?: string;
  primaryImg?: string;
  secondaryImg?: string;
  title?: string;
}

interface IState {
  isImgLoad: boolean;
  isVisible: boolean;
}

export class ProductCard extends PureComponent<IProps, IState> {
  public static defaultProps: IProps;
  public observer: IntersectionObserver;
  public card: HTMLElement;

  public state = {
    isImgLoad: false,
    isVisible: false,
  };

  public componentDidUpdate() {
    if (!this.observer) {
      this.createObservable();
    }
  }

  public componentWillUnmount() {
    this.observer.unobserve(this.card);
  }

  public render() {
    return (
      <article
        ref={this.handleContainerRef}
        className={this.getContainerClassName()}
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
    <DotsPattern className={c.dotsPattern} />
  )

  private renderLink = () => (
    <Link to={`lookbook/${this.props.id}`}>
      <Img
        alt="bag"
        src={this.props.primaryImg}
        imgClassName={c.primaryImg}
        onImgLoad={this.onImgLoad}
      />
      <Img
        alt="bag"
        imgClassName={c.secondaryImg}
        src={this.props.secondaryImg}
      />
    </Link>
  )

  private handleContainerRef = (ref: HTMLElement) => {
    this.card = ref;
  }

  private getContainerClassName = () =>
    cn(c.container, { [c.visible]: this.state.isVisible })

  private getTreshold = () => {
    const treshold = [];

    for (let i = 0; i <= 1.0; i += 0.01) {
      treshold.push(i);
    }

    return treshold;
  }

  private handleIntersect: IntersectionObserverCallback = (entries) => {
    if (entries[0].intersectionRatio > 0.9) {
      this.setState({ isVisible: true });

      return;
    }

    this.setState({ isVisible: false });
  }

  private createObservable = () => {
    const options = {
      root: null as null,
      rootMargin: "0px",
      threshold: this.getTreshold(),
    };

    this.observer = new IntersectionObserver(this.handleIntersect, options);

    this.observer.observe(this.card);
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
