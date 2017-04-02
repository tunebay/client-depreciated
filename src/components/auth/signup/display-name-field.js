import React from 'react';
import className from 'classnames';

const displayNameField = ({ input, label, meta: { touched, error } }) => {
  const signupDisplayNameInputClass = className({
    'signup-display-name-input': true,
    'input-error': (touched && error)
  });
  return (
    <div className="signup-display-name">
      <label className="display-name-label" htmlFor="displayName">Display name</label>
      <p className="field-info">{'You\'re full name or artist name will do just fine.'}</p>
      <input
        className={signupDisplayNameInputClass}
        type="text" {...input}
        value={input.value}
      />
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  );
};

export default displayNameField;
