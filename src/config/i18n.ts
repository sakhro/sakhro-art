import { addLocaleData } from "react-intl";

import en from "react-intl/locale-data/en";

import { LOCALES_DATA } from "@static/locales";

addLocaleData([...en]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const LANGUAGE_CODE =
  (navigator.languages && navigator.languages[0])
  || navigator.language;

export const LANGUAGE = LANGUAGE_CODE.split("-")[0];

// Try full locale, try locale without region code, fallback to 'en'
export const MESSAGES: any =
  LOCALES_DATA[LANGUAGE as LanguageType]
  || LOCALES_DATA.en;
