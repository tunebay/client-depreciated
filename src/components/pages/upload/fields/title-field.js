import React from 'react';

const titleField = ({ input, meta: { touched, error } }) => {
  return (
    <div className="title-field">
      <label
        className="field-label" htmlFor="title-field-input"
      >
        Title<span className="required">*</span>
      </label>
      <input
        className="title-field-input"
        {...input}
        type="text"
      />
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  );
};

export default titleField;
