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
              <div className="artwork" />
            </div>
            <div id="user-info">
              <img
                alt="profile"
                src="https://s3.eu-west-2.amazonaws.com/tunebay/10633639_334520540070023_4983662770087093384_o.jpg"
                id="profile-picture"
              />
              <div id="user-details">
                <div id="display-name">{user.displayName}</div>
                <div className="username">@{user.username}</div>
              </div>
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
