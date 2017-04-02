import React from 'react';
import className from 'classnames';

const emailField = ({ input, label, meta: { touched, error } }) => {
  const signupEmailInputClass = className({
    'signup-email-input': true,
    'input-error': (touched && error)
  });

  return (
    <div className="signup-email">
      <label className="email-label" htmlFor="email">Email address</label>
      <input
        className={signupEmailInputClass}
        type="text" {...input}
        value={input.value}
        spellCheck={false}
      />
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  );
};

export default emailField;
