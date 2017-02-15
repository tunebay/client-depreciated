import React from 'react';

import Header from '../header/header';
import PageContainer from './page-container';
import LoginForm from '../auth/login-form';

import '../../styles/components/login-page.scss';

const Login = () => {
  document.title = 'Log in to Tunebay';
  return (
    <div className="login-page-con">
      <Header />
      <PageContainer>
        <div className="main-content">
          <LoginForm />
        </div>
      </PageContainer>
    </div>
  );
};

export default Login;
