import React from "react";

import c from "./Spinner.scss";

export const Spinner = () => (
  <div className={c.container}>
    <div className={c.loader}>Loading...</div>
  </div>
);
