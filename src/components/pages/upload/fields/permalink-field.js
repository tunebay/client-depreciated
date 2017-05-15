import React from 'react';
import className from 'classnames';

const permalinkField = ({ input, meta: { touched, error }, user }) => {
  const inputClass = className({
    'permalink-field-input': true,
    'input-error': touched && error
  });
  const permalink = `tunebay.com/${user.username}/`;
  return (
    <div className="permalink-field">
      <div className="permalink-zone">
        {permalink}
        <input
          spellCheck={false}
          className={inputClass}
          {...input}
          type="text"
        />
      </div>
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  );
};

export default permalinkField;
