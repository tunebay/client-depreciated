import React from 'react';
import className from 'classnames';

const titleField = ({ input, meta: { touched, error } }) => {
  const inputClass = className({
    'title-field-input': true,
    'input-error': touched && error
  });
  console.log(inputClass);
  return (
    <div className="title-field">
      <label
        className="field-label" htmlFor="title-field-input"
      >
        Title<span className="required">*</span>
      </label>
      <input
        className={inputClass}
        {...input}
        type="text"
      />
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  );
};

export default titleField;
