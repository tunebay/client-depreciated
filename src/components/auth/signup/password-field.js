import React from 'react';

const passwordField = ({ input, type, label, meta: { touched, error } }) => (
  <div className="signup-password">
    <label className="password-label" htmlFor="password">Create a new password</label>
    {/* <p className="field-info">{'Used for your site url and so that others can connect with you'}</p> */}
    <input
      className="signup-password-input"
      type={type}
      {...input}
      value={input.value}
    />
    {touched && error && <div className="field-error">{error}</div>}
  </div>
);

export default passwordField;
