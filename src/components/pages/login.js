import React from 'react';
import PageContainer from './page-container';
import LoginForm from '../auth/login-form';
import '../../styles/components/login-page.scss';

const Login = () => {
  document.title = 'Log in to Tunebay';
  return (
    <PageContainer>
      <div className="main-content">
        <LoginForm />
      </div>
    </PageContainer>
  );
};

export default Login;
