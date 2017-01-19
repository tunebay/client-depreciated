import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Header from '../header';
import MainContent from '../main-content';

class HomeFeed extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

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

export default connect(null, actions)(HomeFeed);
