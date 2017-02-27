import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import '../../../../styles/components/hub/upload-form-fields.scss';

export const renderTitleField = ({ input, label, type }) => (
  <div className="title-field">
    <label className="upload-label" htmlFor={label}>Title<span>*</span></label>
    <div>
      <input {...input} placeholder={'Name your playlist'} type={type} />
    </div>
  </div>
);

export const renderDescriptionField = ({ input, label, type }) => (
  <div className="description-field">
    <label className="upload-label" htmlFor={label}>{label}</label>
    <div>
      <textarea
        {...input}
        placeholder={label}
        type={type}
        rows="4"
        cols="50"
      />
    </div>
  </div>
);
