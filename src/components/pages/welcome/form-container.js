import React, { Component } from 'react';
import classNames from 'classnames';
import SignupForm from '../../auth/signup-form';
import LoginForm from '../../auth/login-form';
import '../../../styles/components/welcome/jumbotron.scss';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupActive: true
    };
  }

  handleSignupClick() {
    if (!this.state.signupActive) {
      this.setState({ signupActive: true });
    }
  }

  handleLoginClick() {
    if (this.state.signupActive) {
      this.setState({ signupActive: false });
    }
  }

  renderForm() {
    if (this.state.signupActive) {
      return <SignupForm />;
    }
    return <LoginForm />;
  }

  render() {
    const signupBtnClass = classNames({
      'welcome-signup-btn': true,
      'auth-btn-active': this.state.signupActive
    });

    const loginBtnClass = classNames({
      'welcome-login-btn': true,
      'auth-btn-active': !this.state.signupActive
    });

    return (
      <div className="form-container">
        <div className="form-con-btns">
          <button
            onClick={this.handleSignupClick.bind(this)}
            className={signupBtnClass}
          >Sign Up</button>
          <button
            onClick={this.handleLoginClick.bind(this)}
            className={loginBtnClass}
          >Log In</button>
        </div>
        {this.renderForm()}
      </div>
    );
  }
}

export default FormContainer;
