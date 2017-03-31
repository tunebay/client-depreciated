import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/auth/signup-header.scss';

const SignupHeader = () => {
  return (
    <nav className="signup-header">
      <div className="header-left">
        <img src="../../../assets/images/logo.svg" alt="logo" />
        <img className="tunebay" src="../../../assets/images/Tunebay.svg" alt="tunebay" />
      </div>
      <div className="header-right">
        <div>Already have an account?</div>
        <Link className="login-link" to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default SignupHeader;
