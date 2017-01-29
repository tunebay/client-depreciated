import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/profile-actions';

class Profile extends Component {
  componentWillMount() {
    this.props.loadUser(this.props.params.username);
  }

  render() {
    return (
      <div>
        <h1>{this.props.params.username}</h1>
      </div>
    );
  }
}

export default connect(null, actions)(Profile);
