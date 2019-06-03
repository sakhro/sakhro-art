import React, { lazy, memo, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { MainLayout } from "@layouts/MainLayout";

import { HISTORY, HOME, LOOKBOOK } from "@constants/url";

const HomePage = lazy(() => import("@routes/HomePage"));
const HistoryPage = lazy(() => import("@routes/HistoryPage"));
const LookbookPage = lazy(() => import("@routes/LookbookPage"));

export const App = memo(() => (
  <BrowserRouter>
    <MainLayout>
      <Suspense fallback={null}> {/* TODO: Add loading fallback */}
        <Switch>
          <Route exact component={HomePage} path={HOME} />
          <Route exact component={HistoryPage} path={HISTORY} />
          <Route exact component={LookbookPage} path={LOOKBOOK} />

          <Redirect to={HOME} />
        </Switch>
      </Suspense>
    </MainLayout>
  </BrowserRouter>
));
