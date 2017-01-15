import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import Home from './components/home';
import Feed from './components/feed';
import Login from './components/auth/login-form';
import NotFound from './components/not-found';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/feed" component={Feed} />
        <Match pattern="/login" component={Login} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
