import React from 'react';
import className from 'classnames';

const titleField = ({ input, meta: { touched, error }, setPermalink }) => {
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
        onBlur={(event) => {
          input.onBlur(event);
          setPermalink();
        }}
      />
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  );
};

export default titleField;
