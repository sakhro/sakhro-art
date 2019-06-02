import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import { HISTORY, HOME, LOOKBOOK } from "@constants/url";

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
