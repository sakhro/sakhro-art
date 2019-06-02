import React, { FC, Fragment, memo } from "react";

import { Footer, Header } from "@components";

import "@styles/app.scss";

export const MainLayout: FC = memo(props => (
    <Fragment>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </Fragment>
  ));
