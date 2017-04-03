import React from 'react';
import Modal from 'react-modal';
// import SignupFlow from '../signup/signup-flow';
import LoginFlow from './login-flow';
import '../../../styles/components/auth/login/login-modal.scss';

const LoginModal = ({ isVisable, requestCloseFn }) => {
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
        closeModal={requestCloseFn}
        onSubmit={() => console.log('log in')}
      />
    </Modal>
  );
};

export default LoginModal;
