import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Header from '../header';

class HomeFeed extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    document.title = 'Tunebay';
    return (
      <div className="home-feed-con">
        {/* <Header /> */}
        <div>Home feed</div>
      </div>
    );
  }
}

export default connect(null, actions)(HomeFeed);
