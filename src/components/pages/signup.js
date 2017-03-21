import React from 'react';
import SignupForm from '../auth/signup-form';
import PageContainer from './page-container';
import Layout from '../../layout';
import '../../styles/components/login-page.scss';

const Signup = () => {
  document.title = 'Sign up for Tunebay';
  return (
    <Layout showHeader page={'Signup'}>
      <PageContainer>
        <div className="main-content">
          <SignupForm />
        </div>
      </PageContainer>
    </Layout>
  );
};

export default Signup;
