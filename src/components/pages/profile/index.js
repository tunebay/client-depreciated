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

// import Layout from '../../../layout';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.props.loadUser(props.match.params.username);
    console.log('constructor');
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
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
    // console.log(scrollY);
    if (!loading) {
      document.title = `${user.displayName} | Tunebay`;
    }

    return (
      <div>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
    playlists: state.profile.playlists,
    loading: state.profile.loading,
    scrollY: state.profile.scrollY,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, actions)(Profile);
