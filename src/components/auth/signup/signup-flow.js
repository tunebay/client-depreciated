import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../../styles/components/auth/signup/signup-flow.scss';
import * as actions from '../../../actions/auth-actions';
import EmailPage from './email-page';
import AccountDetailsPage from './account-details-page';
import PasswordPage from './password-page';

class SignupFlow extends Component {
  constructor(props) {
    super(props);
    this.handleEmailPageSubmit = this.handleEmailPageSubmit.bind(this);
  }

  handleEmailPageSubmit() {
    this.props.nextSignupPage(this.props.page);
  }

  render() {
    const { onSubmit, page } = this.props;
    console.log('PAGE', page);
    return (
      <div style={{ width: '100vw', justifyContent: 'center', display: 'flex', marginTop: 80 }}>
        <ReactCSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {page === 1 && <EmailPage onSubmit={this.handleEmailPageSubmit} />}
          {page === 2 && <AccountDetailsPage onSubmit={this.nextPage} />}
          {page === 3 && <PasswordPage onSubmit={onSubmit} />}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

SignupFlow.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    page: state.auth.signupPage
  };
};

export default connect(mapStateToProps, actions)(SignupFlow);
