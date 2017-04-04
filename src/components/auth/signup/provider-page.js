import React, { Component } from 'react';
import axios from 'axios';
import '../../../styles/components/auth/signup/provider-page.scss';

class ProviderPage extends Component {
  handleFacebookLogin() {
    axios.get('http://localhost:3000/auth/facebook/')
    .then((res) => {
      console.log('RES', res);
    })
    .catch((err) => {
      console.log('FACEBOOK ERR', err);
    });
  }

  render() {
    return (
      <div className="provider-page">
        <img className="email-icon" src="../../../assets/images/signup-email-icon.svg" alt="email-icon" />
        <h2 className="create-an-account">Create an account</h2>
        <div className="hr" />
        <button
          onClick={this.handleFacebookLogin.bind(this)}
          type="button" className="facebook-button"
        >
          Continue with Facebook
        </button>
        <a href="http://localhost:3000/auth/facebook/callback" className="google-button">
          Continue with facebook 2
        </a>
        <button type="button" className="email-button">
          Continue with Email
        </button>
      </div>
    );
  }
}

export default ProviderPage;
