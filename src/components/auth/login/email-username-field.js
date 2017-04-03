import React from 'react';
import className from 'classnames';

const emailOrUsername = ({ input, label, meta: { touched, error } }) => {
  const signupEmailOrUsernameInputClass = className({
    'login-email-username-input': true,
    'input-error': (touched && error)
  });

  return (
    <div className="login-email-username">
      <label className="email-username-label" htmlFor="emailOrUsername">Email address or username</label>
      <input
        className={signupEmailOrUsernameInputClass}
        type="text" {...input}
        value={input.value}
      />
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  );
};

export default emailOrUsername;
