interface IExternalLink {
  href: string;
}

interface IGlobalState {
  nav: {
    isVisible: boolean,
  };
}

interface IReduxAction<P = null, S = {}, E = {}> {
  type: string;
  payload: P;
  responseSuccess(data?: S): ({ type: string, payload: S });
  responseFailure(data?: E): ({ type: string, payload: E });
}

interface IBag {
  id: string;
}

interface ILookbookState {
  bags: IBag[];
  isLoading: false;
}

interface IRootState {
  global: IGlobalState;
  lookbook: ILookbookState;
}
