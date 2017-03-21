import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/profile-actions';

import ProfileCover from './profile-cover';
import ProfileNav from './profile-nav';

import Layout from '../../../layout';

class Profile extends Component {
  componentWillMount() {
    // this.props.loadUser(this.props.params.username);
  }

  render() {
    return (
      <Layout showHeader page={'Profile'}>
        <ProfileCover />
        <ProfileNav />
      </Layout>
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
