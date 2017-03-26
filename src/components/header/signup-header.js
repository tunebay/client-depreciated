import React, { Component } from 'react';

// import '../../styles/components/header/signup-header.scss';

class SignupHeader extends Component {
  render() {
    return (
      <div className="signup-header">
        <img className="signup-logo" src="../../assets/images/logo.png" alt="logo" />
        <p className="have-account">Already have an account? <span className="login-btn">Log In</span></p>
      </div>
    );
  }
}

export default SignupHeader;
