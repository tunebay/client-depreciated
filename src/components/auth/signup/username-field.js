import React from 'react';

const usernameField = ({ input, label, meta: { touched, error } }) => (
  <div className="signup-display-name">
    <label className="display-name-label" htmlFor="displayName">Choose a username</label>
    <p><small>{'This can be whatever you like. Go wild (as long as wild is no longer than 20 character).'}</small></p>
    <input
      className="signup-username-input"
      type="text" {...input}
      value={input.value}
    />
    {touched && error && <div className="field-error">{error}</div>}
  </div>
);

export default usernameField;
