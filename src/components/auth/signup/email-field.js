import React from 'react';

const emailField = ({ input, label, meta: { touched, error } }) => (
  <div className="signup-email">
    <label className="email-label" htmlFor="email">Email address</label>
    <input
      className="signup-email-input"
      type="text" {...input}
      value={input.value}
    />
    {touched && error && <div className="field-error">{error}</div>}
  </div>
);

export default emailField;
