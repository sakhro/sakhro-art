import cn from "classnames";
import React, { FC, memo, useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";

import { Button, Link } from "@components";

import { LINKS, SOCIALS } from "@config/global";

import c from "./Nav.scss";

interface IProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Nav: FC<IProps> = memo((props) => {
  const className = useMemo(() => (
    cn(c.container, { [c.visible]: props.isVisible })
  ), [props.isVisible]);

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

  const renderCloseButton = useCallback(() => (
    <Button
      className={c.close}
      onClick={props.onClose}
      tabIndex={tabIndex}
    >
      <div />
    </Button>
  ), [props.onClose, tabIndex]);

  const renderLinks = useCallback(() => (
    <ul className={c.links}>
      {LINKS.map(renderLink)}
    </ul>
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

  const renderFooter = useCallback(() => (
    <footer className={c.footer}>
      {SOCIALS.map(renderSocial)}
    </footer>
  ), [SOCIALS, tabIndex]);

  return (
    <nav className={className}>
      {renderCloseButton()}
      {renderLinks()}
      {renderFooter()}
    </nav>
  );
});
