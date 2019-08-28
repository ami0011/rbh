import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBarPrivate from './shared/components/AppBarPrivate';
import AppFooter from './shared/components/AppFooter';
import LoaderOverlay from './shared/components/LoaderOverlay';

const Dashboard = lazy(() => import('./screens/Dashboard'));

function RoutesPrivate() {
  return (
    <React.Fragment>
      <AppBarPrivate />
      <Suspense fallback={<LoaderOverlay open />}>
        <Switch>
          <Route exact path="/" component={Dashboard} />,
        </Switch>
      </Suspense>
      <AppFooter />
    </React.Fragment>
  );
}

export default RoutesPrivate;
