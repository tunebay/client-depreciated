import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/profile-actions';

class Profile extends Component {
  componentWillMount() {
    this.props.loadUser(this.props.params.username);
  }

  render() {
    const { user } = this.props;

    if (this.props.loading) {
      return <div />;
    }

    return (
      <div>
        <h1>{user.display_name}</h1>
        <h3>{user.username}</h3>
        <h3>{user.email}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
    loading: state.profile.loading
  };
};

export default connect(mapStateToProps, actions)(Profile);
