import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../../actions/auth-actions';
import LoginModal from '../login/login-modal';
import '../../../styles/components/auth/signup-header.scss';
import '../../../styles/components/auth/login/login-modal.scss';


class SignupHeader extends Component {
  handleLoginClick() {
    this.props.showLoginModal();
  }

  render() {
    console.log('HERE', this.props.loginModalVisable);
    return (
      <nav className="signup-header">
        {/* <div className="header-left"> */}
        <Link className="header-left" to="/">
          <img src="../../../assets/images/logo.svg" alt="logo" />
          <img className="tunebay" src="../../../assets/images/Tunebay.svg" alt="tunebay" />
        </Link>
        {/* </div> */}
        <div className="header-right">
          <div>Already have an account?</div>
          <button
            className="login-link"
            onClick={this.handleLoginClick.bind(this)}
          >
            Login</button>
        </div>
        <LoginModal
          isVisable={this.props.loginModalVisable}
          requestCloseFn={this.props.hideLoginModal}
        />
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginModalVisable: state.auth.loginModalVisable,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, actions)(SignupHeader);
