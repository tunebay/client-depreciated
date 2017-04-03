import React from 'react';
import className from 'classnames';


const passwordField = ({ input, label, meta: { touched, error } }) => {
  const loginPasswordInputClass = className({
    'login-password-input': true,
    'input-error': (touched && error)
  });
  return (
    <div className="login-password">
      <label className="password-label" htmlFor="password">Password</label>
      {/* <p className="field-info">{'Used for your site url and so that others can connect with you'}</p> */}
      <input
        className={loginPasswordInputClass}
        type="password"
        {...input}
        value={input.value}
      />
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  );
};

export default passwordField;
