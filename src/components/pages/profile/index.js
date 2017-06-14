import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from '../content';
import NotFound from '../not-found';
import * as actions from '../../../actions/profile-actions';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.props.findUser(this.props.match.params.username);
  }

  render() {
    const { user, findingUser } = this.props;
    console.log('PROFILE RENDER PROPS', this.props);
    console.log('FINDING USER', findingUser);
    if (findingUser) return <div />;
    if (!user) return <NotFound {...this.props} />;

    return (
      <Content>
        <div>Profile Found</div>
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
