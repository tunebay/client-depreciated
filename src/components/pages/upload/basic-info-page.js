import React from 'react';
import { reduxForm, Field } from 'redux-form';
import titleField from './fields/title-field';
import playlistTypeField from './fields/playlist-type-field';
import releaseDateField from './fields/release-date-field';
import genreField from './fields/genre-field';
import descriptionField from './fields/description-field';
import '../../../styles/components/upload/basic-info-page.scss';

const BasicInfoPage = ({ formType }) => {
  return (
    <form className="basic-info-page">
      <div className="artwork-section" />
      <div className="field-section">
        <Field name="title" component={titleField} formType={formType} />
        <div className="playlist-type-release-date">
          <Field
            name="playlistType"
            formType={formType}
            component={playlistTypeField}
          />
          <Field
            name="releaseDate"
            component={releaseDateField}
          />
        </div>
        <Field name="genres" component={genreField} />
        <Field name="description" component={descriptionField} />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'audioUploadForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(BasicInfoPage);
