import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from '../content';
import NotFound from '../not-found';
import * as actions from '../../../actions/profile-actions';

import './styles/cover-photo.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.props.findUser(this.props.match.params.username);
  }

  componentWillReceiveProps(props) {
    const { findingUser } = this.props;
    if (!props.user) return <NotFound {...this.props} />;
    if (!findingUser) {
      if (props.match.params.username !== props.user.username) {
        this.props.findUser(props.match.params.username);
      }
    }
  }

  render() {
    const { user, findingUser } = this.props;
    if (findingUser) return <div />;
    if (!user) return <NotFound {...this.props} />;
    document.title = `${user.displayName} | Tunebay`;

    return (
      <Content>
        <div id="cover-photo" />
        <div id="profile-nav" />
        <div id="main-profile-wrapper">
          <div id="main-profile-content">
            <div id="detail-section">
              <div id="artwork-con">
                <img
                  id="artwork"
                  alt="artwork"
                  src={user.playlists[0].artwork || 'https://tunebay-upload.s3-eu-west-2.amazonaws.com/users/artwork/eb8c974a-3b35-48b0-bd59-d102ec4d7a38'}
                />
              </div>
            </div>
            <div id="user-info">
              <div
                id="profile-picture-con"
              />
              <div id="user-details">
                <div id="display-name">{user.displayName}</div>
                <div id="username">@{user.username}</div>
                <button id="follow-btn">FOLLOW</button>
              </div>
              <div id="user-info-footer" />
            </div>
          </div>
        </div>
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
    findingUser: state.profile.findingUser
  };
};

export default connect(mapStateToProps, actions)(Profile);
