import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from '../content';
import NavBar from './nav';
import PlaylistsSection from './playlists-section';
import NotFound from '../not-found';
import * as actions from '../../../actions/profile-actions';

import './styles/cover-photo.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.props.findUser(this.props.match.params.username);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
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

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const nav = document.getElementById('cover-photo');
    const coverBottom = Math.round(nav.getBoundingClientRect().bottom);
    this.props.updateCoverBottom(coverBottom);
  }

  render() {
    const { user, findingUser, coverBottom } = this.props;

    if (findingUser) return <div />;
    if (!user) return <NotFound {...this.props} />;

    document.title = `${user.displayName} | Tunebay`;

    const offset = window.pageYOffset * 0.05;
    const backgroundPosition = `50% ${55 - offset}%`;
    const fixed = coverBottom <= 48;
    const paddingTop = fixed ? 0 : 0;

    return (
      <Content>
        <div
          id="cover-photo"
          style={{ backgroundPosition }}
        />
        <NavBar fixed={fixed} />
        <div id="main-profile-wrapper">
          <div id="main-profile-content" style={{ paddingTop }}>
            <div id="profile-bio-wrapper">
              <div className="col-left">
                <div id="profile-picture-con">
                  <img
                    className="profile-picture"
                    src="https://pbs.twimg.com/profile_images/669133764207976448/m3MKvWMn.jpg"
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="col-right">
                <div className="user-info">
                  <div className="heading">
                    <h1 className="display-name">{user.displayName}</h1>
                    <button className="follow-btn"><span>FOLLOW</span></button>
                  </div>
                  <div className="username">@{user.username}</div>
                </div>
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
    findingUser: state.profile.findingUser,
    coverBottom: state.profile.coverBottom
  };
};

export default connect(mapStateToProps, actions)(Profile);
