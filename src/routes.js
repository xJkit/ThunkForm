import React from 'react';
import { Route } from 'react-router';

// Load Container Pages
import App from 'containers/App';
import PageA from 'containers/PageA';
import NotFound from 'containers/NotFound';

// Root Path
const ROOT = '/';

// routes
const routes = (
  <Route path={ROOT} component={App}>
    <Route path="a" component={PageA} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
