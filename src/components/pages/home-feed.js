import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../header/header';
import MainContent from '../main-content';

class HomeFeed extends Component {
  render() {
    document.title = 'Tunebay';
    return (
      <div className="home-feed-con">
        <Header />
        <MainContent>
          <div>Hello {this.props.displayName}</div>
          <div>Home feed</div>
        </MainContent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapppinng', state);
  return {
    user: state.session
  };
};

export default connect(mapStateToProps)(HomeFeed);
