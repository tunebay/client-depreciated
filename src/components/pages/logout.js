import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Header from '../header';
import MainContent from '../main-content';

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <Header />
        <MainContent>
          <div>Log out page</div>
        </MainContent>
      </div>
    );
  }
}

export default connect(null, actions)(Logout);
