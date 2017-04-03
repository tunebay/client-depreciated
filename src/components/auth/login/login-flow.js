import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import validate from './validate';
import asyncValidate from './submit';
import emailOrUsernameField from './email-username-field';
import passwordField from './password-field';
import '../../../styles/components/auth/login/login-flow.scss';

const LoginFlow = (props) => {
  const { handleSubmit, closeModal, isValidating } = props;
  return (
    <form onSubmit={handleSubmit(asyncValidate)} className="login-form-page">
      <h2 className="create-an-account">Log In</h2>
      <Field
        label="Email address or username"
        name="emailOrUsername"
        type="text"
        component={emailOrUsernameField}
      />
      <Field
        label="Password"
        name="password"
        type="text"
        component={passwordField}
      />
      <button disabled={isValidating} type="submit" className="login-button">
        {isValidating ? 'Validating....' : 'Log In'}
      </button>
      <div className="hr" />
      <div className="signup-instead">
        <div className="dont-have-account">
          {'Don\'t have an account?'}
        </div>
        <Link
          onClick={closeModal}
          className="signup-link " to="/signup"
        >Sign Up</Link>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizardLogin',
  validate
  // asyncValidate,
  // asyncBlurFields: ['password']
})(LoginFlow);
