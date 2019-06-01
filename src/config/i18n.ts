import { addLocaleData } from "react-intl";

import en from "react-intl/locale-data/en";

// Our translated strings
import localeData from "@static/locale";

// Polyfill for safary
if (!window.intl) {
  (require as any).ensure([
    "intl",
    "intl/locale-data/jsonp/en.js",
  ], (require: any) => {
    require("intl");
    require("intl/locale-data/jsonp/en.js");
  });
}

addLocaleData([...en]);

type LanguageType = "ua" | "en";

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
export const language  =
  (navigator.languages && navigator.languages[0])
  || navigator.language;

// Try full locale, try locale without region code, fallback to 'en'
export const messages =
  localeData[language as LanguageType]
  || localeData.en;
