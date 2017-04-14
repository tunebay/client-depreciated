import React from 'react';

const descriptionField = ({ input, meta: { touched, error } }) => {
  return (
    <div className="description-field">
      <label
        className="field-label" htmlFor="description-field-input"
      >
        Description
      </label>
      <textarea
        className="description-field-input"
        {...input}
      />
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  );
};

export default descriptionField;
