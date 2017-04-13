import React from 'react';
import { reduxForm, Field } from 'redux-form';
import titleField from './fields/title-field';
import '../../../styles/components/upload/basic-info-page.scss';

const BasicInfoPage = () => {
  return (
    <form className="basic-info-page">
      <div className="artwork-section" />
      <div className="field-section">
        <Field name="title" component={titleField} />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'audioUploadForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(BasicInfoPage);
