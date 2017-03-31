import React from 'react';
import SignupForm from '../auth/signup-form';
import SignupHeader from '../auth/signup-header';
import Content from './content';
import '../../styles/components/login-page.scss';

const Signup = () => {
  document.title = 'Sign up for Tunebay';
  return (
    <div>
      <SignupHeader />
      <Content>
        <SignupForm />
      </Content>
    </div>
  );
};

export default Signup;
