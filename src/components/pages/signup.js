import React from 'react';

import Header from '../header';
import SignupForm from '../auth/signup-form';
import MainContent from '../main-content';

import '../../styles/components/login-page.scss';

const Signup = () => {
  document.title = 'Sign up for Tunebay';
  return (
    <div className="login-page-con">
      <Header />
      <MainContent>
        <div className="main-content">
          <SignupForm />
        </div>
        <div className="login-footer" />
      </MainContent>
    </div>
  );
};

export default Signup;
