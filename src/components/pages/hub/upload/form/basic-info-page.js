import React from 'react';
import { Field, reduxForm } from 'redux-form';
import UploadedPlaylist from '../uploaded-playlist';
import TitleField from './fields/title-field';
import DescriptionField from './fields/description-field';
import GenreField from './fields/genre-field';

const BasicInfoPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="upload-playlist-detail">
        <div className="artwork-section" />
        <div className="upload-form-fields">
          <Field name="title" type="text" component={TitleField} label="Title" />
          <Field name="genre" component={GenreField} label="Genre" />
          <Field name="genre2" component={GenreField} label="Additional genre" />
          <Field name="genre3" component={GenreField} label="Additional genre" />
          <Field name="description" component={DescriptionField} label="Description" />
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
  forceUnregisterOnUnmount: true  // <------ unregister fields on unmount
})(BasicInfoPage);
