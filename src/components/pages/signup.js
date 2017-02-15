import React from 'react';

import SignupHeader from '../header/signup-header';
import SignupForm from '../auth/signup-form';
import PageContainer from './page-container';

import '../../styles/components/login-page.scss';

const Signup = () => {
  document.title = 'Sign up for Tunebay';
  return (
    <div className="login-page-con">
      <SignupHeader />
      <PageContainer>
        <div className="main-content">
          <SignupForm />
        </div>
      </PageContainer>
    </div>
  );
};

export default Signup;
