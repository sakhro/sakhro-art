import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'

import { App } from 'components'

import { language, messages } from './config/i18n'

declare global {
  interface Window { intl: any; }
}

if (!window.intl) {
  (require as  any).ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
  ], (require: any) => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');

    const app = (
      <IntlProvider locale={language} messages={messages}>
        <App />
      </IntlProvider>
    )

    ReactDOM.render(app, document.getElementById('root'))
  });
} else {
  const app = (
    <IntlProvider locale={language} messages={messages}>
      <App />
    </IntlProvider>
  )

  ReactDOM.render(app, document.getElementById('root'))
}


