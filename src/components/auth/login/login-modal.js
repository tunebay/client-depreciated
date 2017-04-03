import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../../../actions/auth-actions';
// import SignupFlow from '../signup/signup-flow';
import LoginFlow from './login-flow';
import '../../../styles/components/auth/login/login-modal.scss';

class LoginModal extends Component {
  handleFormSubmit() {
    console.log('Submit here');
  }

  render() {
    const { isVisable, requestCloseFn } = this.props;
    return (
      <Modal
        isOpen={isVisable}
        className="modal"
        overlayClassName="overlay"
        contentLabel="loginModal"
        shouldCloseOnOverlayClick
        onRequestClose={requestCloseFn}
      >
        {/* <SignupFlow /> */}
        <LoginFlow
          onSubmit={this.handleFormSubmit.bind(this)}
          closeModal={requestCloseFn}
        />
      </Modal>
    );
  }
}

export default connect(null, actions)(LoginModal);
