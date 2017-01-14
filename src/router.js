import React from 'react';
import { BrowserRouter, Match } from 'react-router';

import Home from './components/home';
import Login from './components/auth/login';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/login" component={Login} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
