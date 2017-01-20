import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import '../../styles/components/auth/login-form.scss';

class SignupForm extends Component {
  render() {
    return (
      <div className="form-container">
        <div>Sign up form</div>
      </div>
    );
  }
}

export default connect(null, actions)(SignupForm);
