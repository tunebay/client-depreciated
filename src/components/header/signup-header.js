import React, { Component } from 'react';

import '../../styles/components/signup-header.scss';

class SignupHeader extends Component {
  render() {
    return (
      <nav className="signup-header">
        <img src="../../assets/images/logo.png" alt="logo" />
        <p className="have-account">Already have an account? <span className="login-btn">Log In</span></p>
      </nav>
    );
  }
}

export default SignupHeader;
