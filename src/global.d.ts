interface IReduxAction<P = null, S = {}, E = {}> {
  type: string;
  payload: P;
  responseSuccess(data?: S): ({ type: string, payload: S });
  responseFailure(data?: E): ({ type: string, payload: E });
}

interface IBag {
  id: string;
}

interface IGlobalState {
  nav: {
    isVisible: boolean,
  };
}

interface ILookbookState {
  bags: IBag[];
  isLoading: false;
}

interface IRootState {
  global: IGlobalState;
  lookbook: ILookbookState;
}

type LanguageType = "ua" | "en";

// tslint:disable-next-line:interface-over-type-literal
type LinkType = { id: string, to: string };

// tslint:disable-next-line:interface-over-type-literal
type SocialLinkType = { id: string, Icon: IconType, href: string };

interface IExternalLink {
  href: string;
}
