import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function (ComposedComponent, match) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.replace('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.replace('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { isAuthenticated: state.auth.isAuthenticated };
  }

  Authentication.contextTypes = {
    router: React.PropTypes.object
  };

  return connect(mapStateToProps)(withRouter(Authentication));
}
