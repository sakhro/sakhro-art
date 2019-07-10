import { transformLocalePath } from "@services/helpers";

import * as en_US from "./en-US";
import * as ua_UA from "./ua-UA";

export const LOCALES_DATA = {
  en: transformLocalePath(en_US),
  ua: transformLocalePath(ua_UA),
};
