import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/home';
import Feed from './components/feed';
import LoginPage from './components/login-page';
import NotFound from './components/not-found';

const routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/feed" component={Feed} />
      <Route path="/login" component={LoginPage} />
      <Route path="/*" component={NotFound} />
    </Router>
  );
};

export default routes;
