import React, { FC, memo, useEffect } from "react";

import { Header, Nav } from "@components";

import "@styles/app.scss";
import c from "./MainLayout.scss";

export const MainLayout: FC = memo((props) => (
  <section>
    <Header />
    <Nav />
    <main className={c.main}>
      {props.children}
    </main>
  </section>
));
