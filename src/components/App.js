import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Welcome from './components/pages/welcome/';
// import Login from './components/pages/login';
// import Signup from './components/pages/signup';
// import Logout from './components/pages/logout';
import Profile from './pages/profile/';
import Hub from './pages/hub/hub';
// import NotFound from './components/pages/not-found';
// import RequireAuth from './components/hoc/require-auth';
import Player from './player/player';
import Header from './header/header';

const App = () => {
  console.log('renderingggg app....');
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* <Route exact path="/" component={Root} /> */}
          <Route path="/hub" component={Hub} />
          <Route path="/:username" component={Profile} />
        </Switch>
        <Player />
      </div>
    </Router>
  );
};

export default App;
