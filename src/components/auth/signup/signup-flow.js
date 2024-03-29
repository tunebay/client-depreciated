import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import '../../../styles/components/auth/signup/signup-flow.scss';
import * as actions from '../../../actions/auth-actions';
import EmailPage from './email-page';
import AccountDetailsPage from './account-details-page';
import PasswordPage from './password-page';

class SignupFlow extends Component {
  constructor(props) {
    super(props);
    this.handleEmailPageSubmit = this.handleEmailPageSubmit.bind(this);
    this.handleAccountDetailsPageSubmit = this.handleAccountDetailsPageSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleEmailPageSubmit() {
    this.props.nextSignupPage(this.props.page);
  }

  handleAccountDetailsPageSubmit() {
    this.props.nextSignupPage(this.props.page);
  }

  handleFormSubmit() {
    this.props.signupUser(this.props.newUser.values);
  }

  render() {
    const { page } = this.props;
    return (
      <div style={{ width: '100vw', justifyContent: 'center', display: 'flex', marginTop: 80 }}>
        <CSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {page === 1 && <EmailPage onSubmit={this.handleEmailPageSubmit} />}
          {page === 2 && <AccountDetailsPage onSubmit={this.handleAccountDetailsPageSubmit} />}
          {page === 3 && <PasswordPage onSubmit={this.handleFormSubmit} />}
        </CSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.auth.signupPage,
    newUser: state.form.wizardSignup
  };
};

export default connect(mapStateToProps, actions)(SignupFlow);
