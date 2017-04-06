import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default function (ComposedComponent, match) {
  class Authentication extends Component {
    componentWillMount() {
      console.log('History', this.props.history);
      if (!this.props.isAuthenticated) {
        this.props.history.replace('/login');
      }
    }

    componentWillUpdate(nextProps) {
      console.log('History', this.props.history);
      if (!nextProps.isAuthenticated) {
        this.props.history.replace('/login');
      }
    }

    render() {
      console.log('MATCH', match);
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
