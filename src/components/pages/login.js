import React from 'react';
import Layout from '../../layout';
import PageContainer from './page-container';
import LoginForm from '../auth/login-form';
import '../../styles/components/login-page.scss';

const Login = () => {
  document.title = 'Log in to Tunebay';
  return (
    <Layout showHeader page={'Login'}>
      <PageContainer>
        <div className="main-content">
          <LoginForm />
        </div>
      </PageContainer>
    </Layout>
  );
};

export default Login;
