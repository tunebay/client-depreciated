import React, { Component } from 'react';
import { connect } from 'react-redux';
import Jumbotron from './jumbotron';
import HotRightNow from './hot-right-now';
import * as actions from '../../../actions/auth-actions';
// import Layout from '../../../layout';

class Welcome extends Component {
  componentWillMount() {
    document.title = 'Tunebay | For the love of music';
  }

  render() {
    const { loginModalVisable, hideLoginModal, showLoginModal } = this.props;
    return (
      <div style={{ backgroundColor: '#fff', height: 1000 }}>
        <Jumbotron
          loginModalVisable={loginModalVisable}
          hideLoginModal={hideLoginModal}
          showLoginModal={showLoginModal}
        />
        <HotRightNow />
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
