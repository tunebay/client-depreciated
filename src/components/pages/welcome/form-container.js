import React, { Component } from 'react';
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
    return (
      <div className="form-container">
        <div className="form-con-btns">
          <button
            onClick={this.handleSignupClick.bind(this)}
            className="welcome-signup-btn"
          >Sign Up</button>
          <button
            onClick={this.handleLoginClick.bind(this)}
            className="welcome-login-btn"
          >Log In</button>
        </div>
        {this.renderForm()}
      </div>
    );
  }
}

export default FormContainer;
