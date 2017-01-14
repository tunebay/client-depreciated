import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import Home from './components/home';
import NotFound from './components/not-found';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
