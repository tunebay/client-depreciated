import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import '../../styles/components/auth/login-form.scss';

class LoginForm extends Component {
  handleFormSubmit({ emailOrUsername, password }) {
    this.props.loginUser({ emailOrUsername, password });
  }

  renderModal() {
    console.log('Pop up password reset modal');
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
            component={emailOrUsername =>
              <div className="form-section">
                <input
                  className="form-input"
                  {...emailOrUsername.input}
                  placeholder="Email or username"
                />
              </div>
            }
          />

          <Field
            name="password"
            component={password =>
              <div className="form-section">
                <input
                  className="form-input"
                  {...password.input}
                  type="password"
                  placeholder="Password"
                />
              </div>
            }
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
              <Link className="help-link" onClick={this.renderModal.bind(this)}>Need Help?</Link>
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
