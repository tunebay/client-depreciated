import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeFeed from './pages/home-feed';
import Welcome from './pages/welcome';

class Root extends Component {
  renderRoot() {
    if (this.props.authenticated) {
      return <HomeFeed />;
    }
    return <Welcome />;
  }

  render() {
    return this.renderRoot();
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Root);
