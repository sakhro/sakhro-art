import React, { FC, Fragment, memo } from "react";

import { Header } from "@components";

import "@styles/app.scss";

export const MainLayout: FC = memo(props => (
    <Fragment>
      <Header />
      <main>
        {props.children}
      </main>
    </Fragment>
  ));
