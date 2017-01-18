import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Root from './components/root';
import Login from './components/pages/login';
import NotFound from './components/pages/not-found';
import Logout from './components/pages/logout';


const routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Root} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/*" component={NotFound} />
    </Router>
  );
};

export default routes;
