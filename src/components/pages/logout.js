import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';
import Layout from '../../layout';

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <Layout showHeader page={'Logout'}>
        <div>Log out page</div>
      </Layout>
    );
  }
}

export default connect(null, actions)(Logout);
