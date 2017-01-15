import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class LoginForm extends Component {
  handleFormSubmit({ emailOrUsername, password }) {
    console.log(emailOrUsername, password);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
        <button action="submit">Log In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm);
