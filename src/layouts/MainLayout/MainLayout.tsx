import React, { FC, Fragment } from "react";

import { Footer, Header } from "@components";

import "@styles/app.scss";

export const MainLayout: FC = (props) => (
    <Fragment>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
