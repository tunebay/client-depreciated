import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/profile-actions';

import ProfileCover from './profile-cover';
import ProfileNav from './profile-nav';
import ProfileDetailContent from './profile-detail-content';
import ProfileDetail from './profile-detail';
import ProfileActivity from './profile-activity';
import ProfileUser from './profile-user';

import MusicTab from './tabs/music';

import Layout from '../../../layout';

// document.addEventListener('scroll', (e) => {
//   console.log('scrolling', e);
// });

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.props.loadUser(this.props.params.username);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    console.log('scrolling to...');
    // this.layout.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const doc = document.documentElement;
    const left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    this.props.updateScrollPosition(left, top);
  }

  render() {
    const { user, loading, scrollY, playlists } = this.props;
    if (!loading) {
      document.title = `${user.displayName} | Tunebay`;
    }
    console.log(scrollY);
    return (
      <Layout ref={(n) => { this.layout = n; }} showHeader page={'Profile'}>
        <ProfileCover />
        <ProfileNav scrollY={scrollY} />
        <ProfileDetailContent scrollY={scrollY}>
          <ProfileDetail>
            <ProfileActivity>
              <MusicTab playlists={playlists} loading={loading} />
            </ProfileActivity>
            <ProfileUser loading={loading} user={user} scrollY={scrollY} />
          </ProfileDetail>
        </ProfileDetailContent>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.currentUser);
  return {
    user: state.profile.user,
    playlists: state.profile.playlists,
    loading: state.profile.loading,
    scrollY: state.profile.scrollY,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, actions)(Profile);
