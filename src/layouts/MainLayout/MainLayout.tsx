import React, { FC, memo, useCallback, useEffect, useState } from "react";

import { Header, Nav } from "@components";

import "@styles/app.scss";
import c from "./MainLayout.scss";

interface IProps {
  pageTitleKey: string;
}

export const MainLayout: FC<IProps> = memo(props => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    if (props.pageTitleKey) {
      closeNav();
    }
  }, [props.pageTitleKey]);

  const closeNav = useCallback(() => {
    setIsNavVisible(false);
  }, []);

  const openNav = useCallback(() => {
    setIsNavVisible(true);
  }, []);

  const renderNav = useCallback(() => (
    <Nav
      isVisible={isNavVisible}
      onClose={closeNav}
    />
  ), [isNavVisible, closeNav]);

  const renderHeader = useCallback(() => (
    <Header
      pageTitleKey={props.pageTitleKey}
      onHumburgerClick={openNav}
    />
  ), [props.pageTitleKey, openNav]);

  const renderChildren = useCallback(() => (
    <main className={c.main}>
      {props.children}
    </main>
  ), [props.children]);

  return (
    <section>
      {renderHeader()}
      {renderNav()}
      {renderChildren()}
    </section>
  );
});
