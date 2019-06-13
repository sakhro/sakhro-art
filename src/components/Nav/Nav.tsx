import cn from "classnames";
import React, { FC } from "react";
import { IconType } from "react-icons/lib/cjs";
import { FormattedMessage } from "react-intl";

import { Button, Link } from "@components";

import { LINKS, SOCIALS } from "@config/global";

import c from "./Nav.scss";

interface IProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Nav: FC<IProps> = (props) => {
  const tabIndex = props.isVisible
    ? 0
    : -1;

  const renderLink = ({ id, to }: { id: string, to: string }) => (
    <li key={id}>
      <Link
        to={to}
        onClick={props.onClose}
        tabIndex={tabIndex}
        className={c.navLink}
      >
        <FormattedMessage id={id} />
      </Link>
    </li>
  );

  const renderSocial = ({
    id, Icon, href,
  }: { id: string, Icon: IconType, href: string }) => (
      <Link
        key={id}
        href={href}
        tabIndex={tabIndex}
        className={c.socialLink}
      >
        <Icon />
      </Link>
    );

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
        {LINKS.map(renderLink)}
      </ul>
      <footer className={c.footer}>
        {SOCIALS.map(renderSocial)}
      </footer>
    </nav>
  );
};
