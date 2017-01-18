import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Header from '../header';

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <Header />
        <div>Log out page</div>
      </div>
    );
  }
}

export default connect(null, actions)(Logout);
