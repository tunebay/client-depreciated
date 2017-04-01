import React, { Component } from 'react';
import EmailPage from './email-page';
// import UserPage from './user-page';
// import PasswordPage from './password-page';

class SignupFlow extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div style={{ width: '100vw', justifyContent: 'center', display: 'flex', marginTop: 80 }}>
        {page === 1 && <EmailPage onSubmit={this.nextPage} />}
        {page === 2 && <UserPage previousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 3 && <PasswordPage previousPage={this.previousPage} onSubmit={onSubmit} />}
      </div>
    );
  }
}

export default SignupFlow;
