import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.push('/login');
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

  return connect(mapStateToProps)(Authentication);
}
