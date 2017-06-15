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

  render() {
    const { user, findingUser } = this.props;
    if (findingUser) return <div />;
    if (!user) return <NotFound {...this.props} />;
    document.title = `${user.displayName} | Tunebay`;

    return (
      <Content>
        <div id="cover-photo" />
        <div id="profile-nav" />
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
