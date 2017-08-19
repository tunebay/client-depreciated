import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { checkUserExists } from '../actions/profile-actions';

import HomeFeed from './pages/home-feed';
import PublicHomePage from './pages/welcome/';
import Login from './pages/login';
import Signup from './pages/signup';
import Logout from './pages/logout';
import Profile from './pages/profile/';
// import NotFound from './pages/not-found';
import Upload from './pages/upload/';
import RequireAuth from './hoc/require-auth';
import Header from './header/header';
import Player from './player/player';

class App extends Component {
  renderRoute(ComponentToRender) {
    return (match) => {
      console.log('Is authd?', this.props.isAuthenticated);
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
              exact
              path="/"
              render={(match) => {
                console.log('MATCH', match);
                // console.log('MATCH', match);
                return !this.props.isAuthenticated
                  ? <PublicHomePage />
                  : <div>
                    <Header />
                    <HomeFeed />
                  </div>;
              }}
            />
            {/* <Route path="/hub" component={RequireAuth(Hub)} /> */}
            <Route
              path="/login"
              render={() =>
                !this.props.isAuthenticated
                  ? <div>
                    <Header unauth />
                    <Login />
                  </div>
                  : <Redirect to="/" />}
            />
            <Route
              path="/signup"
              render={() =>
                this.props.isAuthenticated ? <Redirect to="/" /> : <Signup />}
            />
            <Route path="/logout" component={this.renderRoute(Logout)} />
            <Route
              path="/upload"
              component={this.renderRoute(RequireAuth(Upload))}
            />
            <Route
              path="/feed"
              component={this.renderRoute(RequireAuth(HomeFeed))}
            />
            <Route path="/hello" exact render={() => <div>Hello</div>} />
            <Route path="/hello/world" render={() => <div>Hello World</div>} />
            <Route path="/:username" component={this.renderRoute(Profile)} />
          </Switch>
          <Player />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { checkUserExists })(App);
