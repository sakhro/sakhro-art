import { transformLocalePath } from "@services/helpers";

import * as en_US from "./en-US";
import * as uk_UA from "./uk-UA";

export const LOCALES_DATA = {
  en: transformLocalePath(en_US),
  uk: transformLocalePath(uk_UA),
};
