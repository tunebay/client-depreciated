import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomeFeed from './pages/home-feed';
import PublicHomePage from './pages/welcome/';
// import Login from './components/pages/login';
// import Signup from './components/pages/signup';
// import Logout from './components/pages/logout';
import Profile from './pages/profile/';
import Hub from './pages/hub/hub';
// import NotFound from './components/pages/not-found';
import RequireAuth from './hoc/require-auth';
import Player from './player/player';
import Header from './header/header';

class App extends Component {
  render() {
    console.log('renderingggg app....');
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route
              exact path="/" render={() => (
              this.props.isAuthenticated ? (
                <Redirect to="/feed" />
              ) : (
                <PublicHomePage />
              ))}
            />
            <Route path="/hub" component={RequireAuth(Hub)} />
            <Route path="/feed" component={HomeFeed} />
            <Route path="/:username" component={Profile} />
          </Switch>
          <Player />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(App);
