import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>Log out page</div>
    );
  }
}

export default connect(null, actions)(Logout);
