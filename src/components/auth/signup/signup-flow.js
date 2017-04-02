import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/auth-actions';
import EmailPage from './email-page';
import AccountDetailsPage from './account-details-page';
import PasswordPage from './password-page';

class SignupFlow extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    console.log('in next page', this.props.page);
    this.props.nextSignupPage(this.props.page);
  }

  render() {
    const { onSubmit, page } = this.props;
    console.log('PAGE', page);
    return (
      <div style={{ width: '100vw', justifyContent: 'center', display: 'flex', marginTop: 80 }}>
        {page === 1 && <EmailPage onSubmit={this.nextPage} />}
        {page === 2 && <AccountDetailsPage onSubmit={this.nextPage} />}
        {page === 3 && <PasswordPage onSubmit={onSubmit} />}
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
