import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomeFeed from './pages/home-feed';
import PublicHomePage from './pages/welcome/';
import Login from './pages/login';
import Signup from './pages/signup';
import Logout from './pages/logout';
import Profile from './pages/profile/';
// import Hub from './pages/hub/hub';
import NotFound from './pages/not-found';
import Upload from './pages/upload/';
import RequireAuth from './hoc/require-auth';
import Player from './player/player';
import Header from './header/header';

class App extends Component {
  renderRoute(ComponentToRender) {
    return (match) => {
      if (!this.props.isAuthenticated) {
        return (
          <div>
            <Header unauth />
            <ComponentToRender {...match} />
          </div>
        );
      }
      return (
        <div>
          <Header />
          <ComponentToRender {...match} />
        </div>
      );
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact path="/" render={() => (
              this.props.isAuthenticated ? (
                <Redirect to="/feed" />
              ) : (
                <PublicHomePage />
              ))}
            />
            {/* <Route path="/hub" component={RequireAuth(Hub)} /> */}
            <Route
              path="/login" render={() => (
              this.props.isAuthenticated ? (
                <Redirect to="/feed" />
              ) : (
                <div>
                  <Header unauth />
                  <Login />
                </div>
              ))}
            />
            <Route
              path="/signup" render={() => (
              this.props.isAuthenticated ? (
                <Redirect to="/feed" />
              ) : (
                <Signup />
              ))}
            />
            <Route path="/logout" component={this.renderRoute(Logout)} />
            <Route path="/upload" component={this.renderRoute(RequireAuth(Upload))} />
            <Route path="/feed" component={this.renderRoute(RequireAuth(HomeFeed))} />
            <Route path="/:username" render={this.renderRoute(Profile)} />
            <Route path="*" component={NotFound} />
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
