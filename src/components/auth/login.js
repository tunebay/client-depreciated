import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Login extends Component {
  render() {
    const { handleSubmit, fields: { emailOrUsername, password } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div>
          <h1>Welcome back</h1>
          <h3>Log in to Tunebay</h3>
        </div>
        <fieldset>
          <input {...emailOrUsername} type="text" placeholder="Email or username" />
        </fieldset>
        <fieldset>
          <input {...password} type="password" placeholder="Password" />
        </fieldset>
        <button action="submit">Log In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  fields: ['emailOrUsername', 'password']
})(Login);
