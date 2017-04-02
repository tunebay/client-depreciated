import React from 'react';

const displayNameField = ({ input, label, meta: { touched, error } }) => (
  <div className="signup-display-name">
    <label className="display-name-label" htmlFor="displayName">Display name</label>
    <p className="field-info">{'You\'re full name or artist name will do just fine.'}</p>
    <input
      className="signup-display-name-input"
      type="text" {...input}
      value={input.value}
    />
    {touched && error && <div className="field-error">{error}</div>}
  </div>
);

export default displayNameField;
