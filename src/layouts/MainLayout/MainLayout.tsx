import React, { FC, Fragment } from "react";

import { Header } from "@components";

import "@styles/app.scss";

interface IProps {}

export const MainLayout: FC<IProps> = (props) => (
    <Fragment>
      <Header />
      <main>
        {props.children}
      </main>
    </Fragment>
  );
