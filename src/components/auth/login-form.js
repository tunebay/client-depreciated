import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class LoginForm extends Component {
  handleFormSubmit({ emailOrUsername, password }) {
    this.props.loginUser({ emailOrUsername, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <h3>Welcome back</h3>
        <p>Log in to Tunebay</p>
        <Field
          name="emailOrUsername"
          component={emailOrUsername =>
            <div>
              <input {...emailOrUsername.input} type="text" placeholder="Email or username" />
            </div>
          }
        />

        <Field
          name="password"
          component={password =>
            <div>
              <input {...password.input} type="password" placeholder="Password" />
            </div>
          }
        />
        {this.renderAlert()}
        <button action="submit">Log In</button>
      </form>
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
