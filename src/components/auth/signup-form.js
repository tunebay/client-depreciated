import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ReactTooltip from 'react-tooltip';
import * as actions from '../../actions';

import '../../styles/components/auth/auth-form.scss';

const renderField = (field) => {
  return (
    <div className="form-section">
      <input
        className="form-input"
        data-tip="whats up yo"
        data-for="tool-tip"
        placeholder={field.placeholder}
        type={field.type}
        {...field.input}
      />
    </div>
  );
};

class SignupForm extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps);
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

          <Field
            name="displayName"
            component={renderField}
            type="text"
            placeholder="Full name / artist name"
          />

          <Field
            name="email"
            component={renderField}
            type="email"
            placeholder="Email"
          />

          <Field
            name="username"
            component={renderField}
            type="text"
            placeholder="Username"
          />
          <div className="form-section">
            <div className="field-info">Usernames will be used for your personal URL and can be changed at anytime</div>
          </div>

          <Field
            name="password"
            component={renderField}
            type="password"
            placeholder="New password"
          />

          <div className="form-section">
            <button className="btn" action="submit">Sign Up</button>
          </div>
          <div className="form-section">
            <div className="field-info">By clicking ‘Sign Up’ you are agreeing to our <span>Terms of Use</span> and <span>Privacy Policy.</span></div>
          </div>
        </form>
      </div>
    );
  }
}

const ComposedSignupForm = reduxForm({
  form: 'login'
})(SignupForm);

export default connect(null, actions)(ComposedSignupForm);
