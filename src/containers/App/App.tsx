import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { HISTORY, HOME, LOOKBOOK, PRODUCT } from "@constants/url";
import { MainLayout } from "@layouts/MainLayout";

// const HomePage = lazy(() => import("@routes/HomePage"));
// const HistoryPage = lazy(() => import("@routes/HistoryPage"));
// const LookbookPage = lazy(() => import("@routes/LookbookPage"));
// const ProductPage = lazy(() => import("@routes/ProductPage"));

import HistoryPage from "@routes/HistoryPage";
import HomePage from "@routes/HomePage";
import LookbookPage from "@routes/LookbookPage";
import ProductPage from "@routes/ProductPage";

export const App = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <MainLayout>
        <Switch>
          <Route exact component={HomePage} path={HOME} />
          <Route exact component={HistoryPage} path={HISTORY} />
          <Route exact component={LookbookPage} path={LOOKBOOK} />
          <Route exact component={ProductPage} path={PRODUCT} />

          <Redirect to={HOME} />
        </Switch>
      </MainLayout>
    </Suspense>
  </BrowserRouter>
);
