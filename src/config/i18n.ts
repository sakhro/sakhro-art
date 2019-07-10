import { addLocaleData } from "react-intl";

import en from "react-intl/locale-data/en";

import { LOCALES_DATA } from "@static/locales";

addLocaleData([...en]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
export const language =
  (navigator.languages && navigator.languages[0])
  || navigator.language;

// Try full locale, try locale without region code, fallback to 'en'
export const messages =
  LOCALES_DATA[language as LanguageType]
  || LOCALES_DATA.en;
