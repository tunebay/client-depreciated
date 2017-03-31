import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth-actions';

import '../../styles/components/auth/auth-form.scss';

const renderField = (field) => {
  return (
    <div className="form-section">
      <input
        className="form-input"
        placeholder={field.placeholder}
        type={field.type}
        {...field.input}
        required
        autoCorrect={false}
        spellCheck={false}
      />
    </div>
  );
};

class LoginForm extends Component {
  handleFormSubmit({ emailOrUsername, password }) {
    this.props.loginUser({ emailOrUsername, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="form-section error">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-section">
            <h3 className="form-header">Welcome back</h3>
          </div>

          <div className="form-section">
            <p className="form-p">Log in to Tunebay</p>
          </div>

          <Field
            name="emailOrUsername"
            component={renderField}
            type="text"
            placeholder="Email or username"
          />
          <Field
            name="password"
            component={renderField}
            type="password"
            placeholder="password"
          />

          {this.renderAlert()}

          <div className="form-section">
            <div className="remember-me">
              <label htmlFor="remember-me">
                <input
                  type="checkbox"
                  className="checkbox"
                  defaultChecked
                /> Remember me
              </label>
            </div>
            <div className="need-help">
              <a className="help-link" onClick={() => console.log('modal')}>Need Help?</a>
            </div>
          </div>

          <div className="form-section">
            <button className="btn" action="submit">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.error
  };
};

const ComposedLoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default connect(mapStateToProps, actions)(ComposedLoginForm);
