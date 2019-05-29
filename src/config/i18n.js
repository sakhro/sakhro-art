import { addLocaleData } from 'react-intl';

import * as en from 'react-intl/locale-data/en';

// Our translated strings
import localeData from 'static/locale';

addLocaleData([...en]);

// type LanguageType = 'ua' | 'en'

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
export const language  =
  (navigator.languages && navigator.languages[0])
  || navigator.language

// Try full locale, try locale without region code, fallback to 'en'
export const messages =
  localeData[language]
  || localeData.en;
