import React, { Component } from 'react';
import { connect } from 'react-redux';
import Jumbotron from './jumbotron';
import HotRightNow from './hot-right-now';
import hotPlaylists from './hot-playlists';
import * as actions from '../../../actions/auth-actions';
// import Layout from '../../../layout';

class Welcome extends Component {
  componentWillMount() {
    document.title = 'Tunebay | For the love of music';
  }

  render() {
    const { loginModalVisable, hideLoginModal, showLoginModal } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Jumbotron
          loginModalVisable={loginModalVisable}
          hideLoginModal={hideLoginModal}
          showLoginModal={showLoginModal}
        />
        <HotRightNow hotPlaylists={hotPlaylists} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginModalVisable: state.auth.loginModalVisable
  };
};

export default connect(mapStateToProps, actions)(Welcome);
