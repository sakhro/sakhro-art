import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import { language } from "@config/i18n";
import { HISTORY, HOME, LOOKBOOK } from "@constants/url";
import { LOCALES_DATA } from "@static/locales";

export const FB_URL = "//web.facebook.com/olesya.sakhro";
export const INSTAGRAM_URL = "//www.instagram.com/olesya.sakhro";

export const LINKS = [
  { id: "home", to: HOME },
  { id: "lookbook", to: LOOKBOOK },
  { id: "history", to: HISTORY },
];

export const SOCIALS = [
  { id: "facebook", Icon: FaFacebookSquare, href: FB_URL },
  { id: "instagram", Icon: FaInstagram , href: INSTAGRAM_URL },
];

export const PAGE_TITLE = "OLESYA SAKHRO";

export const DEFAULT_MESSAGES: any = LOCALES_DATA[language as LanguageType];
