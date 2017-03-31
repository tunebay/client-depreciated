import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from './content';

class HomeFeed extends Component {
  render() {
    document.title = 'Tunebay';
    return (
      <Content>
        <div>Home feed</div>
        <div>Home feed</div>
        <div>Home feed</div>
        <div>Home feed</div>
        <div>Home feed</div>
        <div>Home feed</div>
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  if (!state.currentUser) return {};
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(HomeFeed);
