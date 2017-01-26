import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Spinner from 'react-spinner';
import _ from 'lodash';
import { uniqueUsernameCheck, signupUser } from '../../actions';
import Tooltip from '../hoc/tooltip';

import '../../styles/components/auth/auth-form.scss';

const renderDisplayNameField = (field) => {
  return (
    <div className="form-section">
      <input
        {...field.input}
        type="text"
        ref={field.ref}
        placeholder="Full name / Artist name"
        spellCheck={false}
        autoCorrect={false}
        maxLength="20"
        className="form-input"
        data-for="displayName"
        data-tip="displayName"
        formNoValidate
      />
      {field.meta.touched && field.meta.error &&
        <Tooltip id="displayName" event="nothing" showInitial place="left" type="error" effect="solid">
          <div>{field.meta.error}</div>
        </Tooltip>}
    </div>
  );
};

const renderEmailField = (field) => {
  return (
    <div className="form-section">
      <input
        {...field.input}
        type="email"
        placeholder="Email address"
        spellCheck={false}
        autoCorrect={false}
        maxLength="54"
        className="form-input"
        data-for="email"
        data-tip="email"
        formNoValidate
      />
      {field.meta.touched && field.meta.error &&
        <Tooltip id="email" event="nothing" showInitial place="left" type="error" effect="solid">
          <div>{field.meta.error}</div>
        </Tooltip>}
    </div>
  );
};

const renderUsernameField = (field) => {
  uniqueUsernameCheck({ username: field.input.value });
  return (
    <div className="form-section">
      <div
        className="at-symbol"
        data-for="username"
        data-tip="username"
      >@</div>
      <input
        {...field.input}
        placeholder="username"
        type="text"
        maxLength="16"
        className="form-input username"
        formNoValidate
      />
      {field.meta.touched && field.meta.error &&
        <Tooltip id="username" event="nothing" showInitial place="left" type="error" effect="solid">
          <div>{field.meta.error}</div>
        </Tooltip>}
    </div>
  );
};

const renderPasswordField = (field) => {
  return (
    <div className="form-section">
      <input
        {...field.input}
        type="password"
        placeholder="New password"
        spellCheck={false}
        autoCorrect={false}
        className="form-input"
        data-for="password"
        data-tip="password"
        formNoValidate
      />
      {field.meta.touched && field.meta.error &&
        <Tooltip id="password" showInitial event="nothing" place="left" type="error" effect="solid">
          <div>{field.meta.error}</div>
        </Tooltip>}
    </div>
  );
};

class SignupForm extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
  }

  renderButton() {
    if (this.props.isLoading) {
      return <button className="btn"><Spinner /></button>;
    }
    return <button className="btn" action="submit">Sign Up</button>;
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-section">
            <h3 className="form-header">Create an account</h3>
          </div>

          <div className="form-section">
            <p className="form-p">{'Yep, it\'s free'}</p>
          </div>

          <Field name="displayName" component={renderDisplayNameField} />
          <Field name="email" component={renderEmailField} />

          <Field
            name="username"
            component={renderUsernameField}
          />

          <div className="form-section">
            <div className="field-info">Usernames will be used for your personal URL and can be changed at anytime</div>
          </div>
          <Field name="password" component={renderPasswordField} />

          <div className="form-section">
            {this.renderButton()}
          </div>
          <div className="form-section">
            <div className="field-info">By clicking ‘Sign Up’ you are agreeing to our <span>Terms of Use</span> and <span>Privacy Policy.</span></div>
          </div>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.displayName) {
    errors.displayName = 'What\'s your name?';
  } else if (values.displayName.length > 20) {
    errors.displayName = 'Display names can be a maximum of 20 characters';
  }
  if (!values.email) {
    errors.email = 'Enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.username) {
    errors.username = 'Choose a username';
  } else if (!/^[a-z][a-z0-9_]{0,24}$/i.test(values.username)) {
    errors.username = 'Your username can only contain letters, numbers and \'_\'';
  }
  if (!values.password || values.password.length < 6) {
    errors.password = 'Password must be atleast 6 characters long';
  }
  return errors;
};

const ComposedSignupForm = reduxForm({
  form: 'login',
  validate
})(SignupForm);

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.error,
    isLoading: state.auth.loading
  };
};

export default connect(mapStateToProps, {signupUser})(ComposedSignupForm);
