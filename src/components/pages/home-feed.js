import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../header/header';
import MainContent from '../main-content';

class HomeFeed extends Component {
  render() {
    console.log(this.props);
    document.title = 'Tunebay';
    return (
      <div className="home-feed-con">
        <Header />
        <MainContent>
          {/* <div>Hello {this.props.currentUser.displayName}</div> */}
          <div>Home feed</div>
        </MainContent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.auth);
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(HomeFeed);
