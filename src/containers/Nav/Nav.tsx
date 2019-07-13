import cn from "classnames";
import React, { FC } from "react";
import { FormattedMessage } from "react-intl";

import { Button, Img, Link } from "@components";

import { LINKS, SOCIALS } from "@config/global";
import { MESSAGES } from "@config/i18n";
import { FacebookIcon, InstagramIcon } from "@static/images";

import c from "./Nav.scss";
import { IProps } from "./types";

export const Nav: FC<IProps> = (props) => {
  const tabIndex = props.isVisible
    ? 0
    : -1;

  const getIcon = (id: string) => {
    switch (id) {
      case "facebook":
        return (
          <Img
            src={FacebookIcon}
            alt="facebook"
            imgClassName={c.socialIcon}
          />
        );
      case "instagram":
        return (
          <Img
            src={InstagramIcon}
            alt="instagram"
            imgClassName={c.socialIcon}
          />
        );
      default:
        return;
    }
  };

  return (
    <nav className={cn(c.container, { [c.visible]: props.isVisible })}>
      <Button
        className={c.close}
        onClick={props.onClose}
        tabIndex={tabIndex}
      >
        <div />
      </Button>
      <ul className={c.links}>
        {LINKS.map(({ id, to }: LinkType) => (
          <li key={id}>
            <Link
              to={to}
              onClick={props.onClose}
              tabIndex={tabIndex}
              className={c.navLink}
            >
              <FormattedMessage
                id={`common.${id}`}
                defaultMessage={MESSAGES[`common.${id}`]}
              />
            </Link>
          </li>
        ))}
      </ul>
      <footer className={c.footer}>
        {SOCIALS.map(({ id, href }: SocialLinkType) => (
          <Link
            key={id}
            href={href}
            tabIndex={tabIndex}
            className={c.socialLink}
          >
            {getIcon(id)}
          </Link>
        ))}
      </footer>
    </nav>
  );
};
