import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validate from './validate';
import passwordField from './password-field';
import '../../../styles/components/auth/signup/password-page.scss';

const PasswordPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="signup-form-page">
      <img className="email-icon" src="../../../assets/images/signup-padlock-icon.svg" alt="email-icon" />
      <Field
        label="Create a new password"
        name="password"
        type="password"
        component={passwordField}
      />
      <div className="hr" />
      <button type="submit" className="signup-button">
        Finish
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'wizardSignup',
  // fields: ['password', 'phoneNumber'],
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  validate
  // asyncValidate: uniqueEmailCheck,
  // asyncBlurFields: ['email']
})(PasswordPage);
