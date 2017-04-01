import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import signupValidate from './signup-validate';
import uniqueEmailCheck from './unique-email-check';
import emailField from './email-field';
import '../../../styles/components/auth/signup/email-page.scss';

const EmailPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(uniqueEmailCheck)} className="signup-form-page">
      <img className="email-icon" src="../../../assets/images/signup-email-icon.svg" alt="email-icon" />
      <h2 className="create-an-account">Create an account</h2>
      <Field
        label="Email address"
        name="email"
        type="email"
        component={emailField}
      />
      <div className="hr" />
      <button type="submit" className="signup-button">
        Get started
      </button>
      <p className="terms"><small>By signing up, I agree to Tunebay’s <Link className="terms-link" to="/terms" target="_blank">Terms of Service</Link>, <Link className="terms-link" to="/terms">Payments Terms of Service</Link> and <Link className="terms-link" to="/terms">Privacy Policy</Link>.</small></p>
    </form>
  );
};

export default reduxForm({
  form: 'wizardSignup',
  fields: ['email'],
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: signupValidate
  // asyncValidate,
  // asyncBlurFields: ['email']
})(EmailPage);
