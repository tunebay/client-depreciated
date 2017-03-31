import React from 'react';
import SignupForm from '../auth/signup-form';
import PageContainer from './page-container';
import Content from './content';
import '../../styles/components/login-page.scss';

const Signup = () => {
  document.title = 'Sign up for Tunebay';
  return (
    <Content>
      <PageContainer>
        <div className="main-content">
          <SignupForm />
        </div>
      </PageContainer>
    </Content>
  );
};

export default Signup;
