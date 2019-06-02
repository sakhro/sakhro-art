import React, { lazy, memo, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { MainLayout } from "@layouts/MainLayout";

import { HISTORY, HOME } from "@constants/url";

const HomePage = lazy(() => import("@routes/HomePage"));
const HistoryPage = lazy(() => import("@routes/HistoryPage"));

export const App = memo(() => (
  <BrowserRouter>
    <MainLayout>
      <Suspense fallback={null}> {/* TODO: Add loading fallback */}
        <Switch>
          <Route exact component={HomePage} path={HOME} />
          <Route exact component={HistoryPage} path={HISTORY} />

          <Redirect to={HOME} />
        </Switch>
      </Suspense>
    </MainLayout>
  </BrowserRouter>
));
