interface IBag {
  thumbnail: string;
  imgs: string[];
}

type LanguageType = "uk" | "en";

// tslint:disable-next-line:interface-over-type-literal
type LinkType = { id: string, to: string };

// tslint:disable-next-line:interface-over-type-literal
type SocialLinkType = { id: string, Icon: IconType, href: string };

interface IExternalLink {
  href: string;
}
