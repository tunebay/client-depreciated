import React from 'react';

export const renderTitleField = ({ input, label, type }) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
);
