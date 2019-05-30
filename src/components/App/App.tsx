import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { HOME } from '@constants/url'

const HomePage = lazy(() => import('@routes/HomePage'));

export const App = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Switch>
        <Route exact component={HomePage} path={HOME} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)
