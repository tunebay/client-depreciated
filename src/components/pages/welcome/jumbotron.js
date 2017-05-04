import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import LoginModal from '../../auth/login/login-modal';
import '../../../styles/components/welcome/jumbotron.scss';

const Jumbotron = (props) => {
  const { hideLoginModal, showLoginModal, loginModalVisable } = props;
  console.log('rendering');
  return (
    <div id="jumbo-con">
      <div className="logo-con">
        <img src="../../../../assets/images/logo.svg" alt="logo" className="logo" />
        <img src="../../../../assets/images/tunebay-light.svg" alt="logo" className="tunebay" />
      </div>
      <LoginModal isVisable={loginModalVisable} requestCloseFn={hideLoginModal} />
      <div className="overlay">

        <div className="shout-out">
          <h1 className="title">{'For the love of music!'}</h1>
          <p className="tag">{'Connect with & directly support the music you love.'}</p>
          <div className="action-buttons">
            <Link className="discover-btn" to="/discover">Discover</Link>
            <Link className="sell-your-own-btn" to="/">Sell your own</Link>
          </div>
        </div>
        <div className="auth-container">
          <div className="auth-con-header">
            <button onClick={showLoginModal} className="login-btn">Log In</button>
          </div>
          <div className="auth-content">
            <h2 className="auth-title">Create an account</h2>
            <p className="auth-tag">Join the fastest growing community of music makers and music lovers today.</p>
            <button className="fb-btn">
              <Icon className="fb-logo" name="facebook" size="lg" />
              <div className="btn-txt">
                Continue with Facebook
              </div>
            </button>
            <button className="google-btn">
              <img className="google-logo" src="../../../../assets/images/g.svg" alt="google" />
              <div className="btn-txt">
                Continue with Google
              </div>
            </button>
            <div className="or">
              <div className="hr" />
              or
              <div className="hr" />
            </div>
            <Link className="signup-email-btn" to="/signup">Continue with Email</Link>
            <p className="terms"><small>By signing up, I agree to Tunebay’s <Link className="terms-link" to="/terms" target="_blank">Terms of Service</Link>, <Link className="terms-link" to="/terms">Payments Terms of Service</Link> and <Link className="terms-link" to="/terms">Privacy Policy</Link>.</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
