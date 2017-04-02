import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validate from './validate';
import displayNameField from './display-name-field';
import usernameField from './username-field';
import '../../../styles/components/auth/signup/account-details-page.scss';

const AccountDetailsPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="signup-form-page">
      <img className="email-icon" src="../../../assets/images/signup-email-icon.svg" alt="email-icon" />
      <Field
        label="Email address"
        name="displayName"
        type="text"
        maxLength={20}
        component={displayNameField}
      />
      <Field
        label="Email address"
        name="displayName"
        type="text"
        maxLength={20}
        component={usernameField}
      />
      <div className="hr" />
      <button type="submit" className="signup-button">
        Continue
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'wizardSignup',
  // fields: ['displayName', 'username'],
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
  // asyncValidate,
  // asyncBlurFields: ['email']
})(AccountDetailsPage);
