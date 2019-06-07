import React from "react";
import ReactDOM from "react-dom";
import { InjectedIntlProps, IntlProvider } from "react-intl";
import { Provider } from "react-redux";

import { App } from "@components";

import { language, messages } from "@config/i18n";
import { rootStore } from "@redux/configureStore";

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    intl: InjectedIntlProps;
  }
}

const app = (
  <Provider store={rootStore}>
    <IntlProvider locale={language} messages={messages}>
      <App />
    </IntlProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
