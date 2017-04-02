import React from 'react';

const usernameField = ({ input, label, meta: { touched, error } }) => (
  <div className="signup-username">
    <label className="username-label" htmlFor="username">Choose a username</label>
    {/* <p className="field-info">{'Used for your site url and so that others can connect with you'}</p> */}
    <input
      className="signup-username-input"
      type="text" {...input}
      value={input.value}
    />
    {touched && error && <div className="field-error">{error}</div>}
  </div>
);

export default usernameField;
