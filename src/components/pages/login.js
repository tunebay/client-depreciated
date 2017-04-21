import React from 'react';
import PageContainer from './page-container';
import LoginModal from '../auth/login/login-modal';
import Content from './content';
import '../../styles/components/login-page.scss';

const Login = () => {
  document.title = 'Log in to Tunebay';
  return (
    <Content>
      <PageContainer>
        <div className="main-content">
          <LoginModal />
        </div>
      </PageContainer>
    </Content>
  );
};

export default Login;
