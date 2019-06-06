import React, { lazy, memo, Suspense } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";

import { MainLayout } from "@layouts/MainLayout";

import { history } from "@redux/configureStore";

import { HISTORY, HOME, LOOKBOOK, PRODUCT } from "@constants/url";

const HomePage = lazy(() => import("@routes/HomePage"));
const HistoryPage = lazy(() => import("@routes/HistoryPage"));
const LookbookPage = lazy(() => import("@routes/LookbookPage"));
const ProductPage = lazy(() => import("@routes/ProductPage"));

export const App = memo(() => (
  <Router history={history}>
    <MainLayout>
      <Suspense fallback={null}> {/* TODO: Add loading fallback */}
        <Switch>
          <Route exact component={HomePage} path={HOME} />
          <Route exact component={HistoryPage} path={HISTORY} />
          <Route exact component={LookbookPage} path={LOOKBOOK} />
          <Route exact component={ProductPage} path={PRODUCT} />

          <Redirect to={HOME} />
        </Switch>
      </Suspense>
    </MainLayout>
  </Router>
));
