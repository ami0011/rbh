import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import AppBarPublic from './shared/components/AppBarPublic';
import AppFooter from './shared/components/AppFooter';
import LoaderOverlay from './shared/components/LoaderOverlay';

const Landing = lazy(() => import('./screens/Landing'));

function RoutesPublic({ match }) {
  const prefix = match.path;
  return (
    <React.Fragment>
      <AppBarPublic />
      <Suspense fallback={<LoaderOverlay open />}>
        <Switch>
          <Route exact path={`${prefix}/`} component={Landing} />
        </Switch>
      </Suspense>
      <AppFooter />
    </React.Fragment>
  );
}

RoutesPublic.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default RoutesPublic;
