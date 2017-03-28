import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Root from './components/root';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import Logout from './components/pages/logout';
import Profile from './components/pages/profile/';
import Hub from './components/pages/hub/hub';
import NotFound from './components/pages/not-found';
import RequireAuth from './components/hoc/require-auth';
import Player from './components/player/player';


const routes = () => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={Root} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/logout" component={Logout} />
        <Route path="/hub" component={RequireAuth(Hub)} />
        <Route path="/:username" component={Profile} />
        <Route path="/*" component={NotFound} />
      </Router>
      <Player />
    </div>
  );
};

export default routes;
