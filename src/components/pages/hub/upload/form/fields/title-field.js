import React from 'react';
import Icon from 'react-fontawesome';
import '../../../../../../styles/components/hub/upload/form-fields.scss';

const TitleField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="title-field">
    <label className="upload-label" htmlFor={label}>{label}<span>*</span></label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
    {touched && error &&
      <div className="field-error">
        <Icon name="exclamation-circle" /> {error}
      </div>}
  </div>
);

export default TitleField;
