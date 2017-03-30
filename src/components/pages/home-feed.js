import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Layout from '../../layout';

class HomeFeed extends Component {
  render() {
    document.title = 'Tunebay';
    return (
      // <Layout showHeader page={'HomeFeed'}>
      <div>
        <div>Home feed</div>
        <div>Home feed</div>
        <div>Home feed</div>
        <div>Home feed</div>
        <div>Home feed</div>
        <div>Home feed</div>
      </div>
      // </Layout>
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
