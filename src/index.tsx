import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider, InjectedIntlProps } from 'react-intl'

import { App } from '@components'

import { language, messages } from '@config/i18n'

declare global {
  interface Window {
    intl: InjectedIntlProps
  }
}

const app = (
  <IntlProvider locale={language} messages={messages}>
    <App />
  </IntlProvider>
)

ReactDOM.render(app, document.getElementById('root'))
