import React from 'react';
import '../../../../../../styles/components/hub/upload/form-fields.scss';

const TitleField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="title-field">
    <label className="upload-label" htmlFor={label}>{label}<span>*</span></label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
    {touched && error && <span>{error}</span>}
  </div>
);

export default TitleField;
