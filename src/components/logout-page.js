import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions';

class LogoutPage extends Component {
  componentDidMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <h3>Thanks for tuning in!</h3>
        <p>We hope to hear from you soon.</p>
      </div>
    );
  }
}

export default connect(null, actions)(LogoutPage);
