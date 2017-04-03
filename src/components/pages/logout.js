import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';
import Content from './content';

class Logout extends Component {
  componentWillMount() {
    document.title = 'Tunebay | Goodbye!';
  }

  componentDidMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <Content>
        <div>Log out page</div>
      </Content>
    );
  }
}

export default connect(null, actions)(Logout);
