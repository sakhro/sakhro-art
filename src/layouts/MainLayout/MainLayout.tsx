import React, { FC, Fragment, memo } from "react";

import { Header } from "@components";

import "@styles/app.scss";
import c from "./MainLayout.scss";

export const MainLayout: FC = memo(props => (
  <Fragment>
    <Header />
    <main className={c.main}>
      {props.children}
    </main>
  </Fragment>
));
