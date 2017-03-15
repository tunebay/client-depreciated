import React from 'react';

const TitleField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="title-field">
    <label className="upload-label" htmlFor={label}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default TitleField;
