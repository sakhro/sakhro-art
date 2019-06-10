import cn from "classnames";
import React, { FC, useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";

import { Button, Link } from "@components";

import { LINKS, SOCIALS } from "@config/global";

import c from "./Nav.scss";

interface IProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Nav: FC<IProps> = (props) => {
  const tabIndex = useMemo(() => (
    props.isVisible
      ? 0
      : -1
  ), [props.isVisible]);

  const renderLink = useCallback(({ id, to }) => (
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
  ), [LINKS, tabIndex]);

  const renderSocial = useCallback(({
    id, Icon, href,
  }) => (
      <Link
        key={id}
        href={href}
        tabIndex={tabIndex}
        className={c.socialLink}
      >
        <Icon />
      </Link>
    ), [SOCIALS, tabIndex]);

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
