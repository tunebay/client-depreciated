import React from 'react';

import Header from './header';
import LoginForm from './auth/login-form';

import '../styles/components/login-page.scss';

const LoginPage = () => {
  return (
    <div className="login-page-con">
      <Header />
      <div className="content">
        <div className="main-content">
          <LoginForm />
        </div>
        <div className="login-footer" />
      </div>
    </div>
  );
};

export default LoginPage;
