import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Root from './components/root';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import Logout from './components/pages/logout';
import Profile from './components/pages/profile';
import NotFound from './components/pages/not-found';


const routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Root} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/logout" component={Logout} />
      <Route path="/:username" component={Profile} />
      <Route path="/*" component={NotFound} />
    </Router>
  );
};

export default routes;
