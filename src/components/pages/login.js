import React from 'react';
import PageContainer from './page-container';
import LoginForm from '../auth/login-form';
import Content from './content';
import '../../styles/components/login-page.scss';

const Login = () => {
  document.title = 'Log in to Tunebay';
  return (
    <Content>
      <PageContainer>
        <div className="main-content">
          <LoginForm />
        </div>
      </PageContainer>
    </Content>
  );
};

export default Login;
