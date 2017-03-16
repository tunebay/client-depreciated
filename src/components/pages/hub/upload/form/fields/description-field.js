import React from 'react';

const DescriptionField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="description-field">
    <label className="upload-label" htmlFor={label}>{label}</label>
    <div>
      <textarea {...input} placeholder="Add a short description" type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default DescriptionField;
