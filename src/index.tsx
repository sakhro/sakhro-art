import React from "react";
import ReactDOM from "react-dom";
import { InjectedIntlProps, IntlProvider } from "react-intl";

import { App } from "@containers";

import { LANGUAGE, MESSAGES } from "@config/i18n";

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    intl: InjectedIntlProps;
  }
}

const app = (
  <IntlProvider locale={LANGUAGE} messages={MESSAGES}>
    <App />
  </IntlProvider>
);

ReactDOM.render(app, document.getElementById("root"));
