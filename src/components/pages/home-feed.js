import React, { Component } from 'react';

import Header from '../header/header';
import MainContent from '../main-content';

class HomeFeed extends Component {
  render() {
    document.title = 'Tunebay';
    return (
      <div className="home-feed-con">
        <Header />
        <MainContent>
          <div>Home feed</div>
        </MainContent>
      </div>
    );
  }
}

export default HomeFeed;
