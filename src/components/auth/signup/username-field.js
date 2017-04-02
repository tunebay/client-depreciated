import React from 'react';
import className from 'classnames';

const usernameField = ({ input, label, meta: { touched, error } }) => {
  const signupUsernameInputClass = className({
    'signup-username-input': true,
    'input-error': (touched && error)
  });
  return (
    <div className="signup-username">
      <label className="username-label" htmlFor="username">Choose a username</label>
      {/* <p className="field-info">{'Used for your site url and so that others can connect with you'}</p> */}
      <input
        className={signupUsernameInputClass}
        type="text" {...input}
        value={input.value}
        maxLength={20}
        spellCheck={false}
      />
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  );
};

export default usernameField;
