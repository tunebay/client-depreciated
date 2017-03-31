import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/auth/signup-header.scss';

const SignupHeader = () => {
  return (
    <nav className="signup-header">
      <div className="header-left">Tunebay</div>
      <div className="header-right">
        <div>Already have an account?</div>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default SignupHeader;
