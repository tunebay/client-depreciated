import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/profile-actions';

import ProfileCover from './profile-cover';
import ProfileNav from './profile-nav';
import ProfileDetailContent from './profile-detail-content';
import ProfileDetail from './profile-detail';
import ProfileActivity from './profile-activity';
import ProfileUser from './profile-user';

import Layout from '../../../layout';

class Profile extends Component {
  componentWillMount() {
    this.props.loadUser(this.props.params.username);
  }

  render() {
    const { user, loading } = this.props;
    if (!loading) {
      document.title = `${user.displayName} | Tunebay`;
    }

    return (
      <Layout showHeader page={'Profile'}>
        <ProfileCover />
        <ProfileNav />
        <ProfileDetailContent>
          <ProfileDetail>
            <ProfileActivity />
            <ProfileUser loading={loading} user={user} />
          </ProfileDetail>
        </ProfileDetailContent>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
    playlists: state.profile.playlists,
    loading: state.profile.loading
  };
};

export default connect(mapStateToProps, actions)(Profile);
