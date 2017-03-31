import React from 'react';
import SignupForm from '../auth/signup-form';
import PageContainer from './page-container';
import '../../styles/components/login-page.scss';

const Signup = () => {
  document.title = 'Sign up for Tunebay';
  return (
    <PageContainer>
      <div className="main-content">
        <SignupForm />
      </div>
    </PageContainer>
  );
};

export default Signup;
