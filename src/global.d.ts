interface IExternalLink {
  href: string;
}

interface IGlobalState {
  nav: {
    isVisible: boolean,
  };
}

interface IRootState {
  global: IGlobalState;
}
