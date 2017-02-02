import React from 'react';

import Header from '../header/header';
import MainContent from '../main-content';
import LoginForm from '../auth/login-form';

import '../../styles/components/login-page.scss';

const Login = () => {
  document.title = 'Log in to Tunebay';
  return (
    <div className="login-page-con">
      <Header />
      <MainContent>
        <div className="main-content">
          <LoginForm />
        </div>
        <div className="login-footer" />
      </MainContent>
    </div>
  );
};

export default Login;
