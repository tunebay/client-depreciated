import React from 'react';
import { Field, reduxForm } from 'redux-form';
import UploadedPlaylist from '../uploaded-playlist';
import renderField from './render-field';

const BasicInfoPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="upload-playlist-detail">
        <div className="artwork-section" />
        <div className="upload-form-fields">
          <Field name="title" type="checkbox" component={renderField} label="First Name" />
          <Field name="playlistType" component={renderField} type="text" label="Last Name" />
        </div>
      </div>
      <div className="uploaded-playlist-con">
        <UploadedPlaylist />
      </div>
      <div className="upload-form-footer">
        <div>*Indicates required field</div>
        <div className="uploadform-action-btns">
          <button type="submit" className="next">Next</button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'audioUpload',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  initialValues: { title: true }
})(BasicInfoPage);
