import React from 'react';
import { reduxForm, Field } from 'redux-form';
import titleField from './fields/title-field';
import playlistTypeField from './fields/playlist-type-field';
import releaseDateField from './fields/release-date-field';
import genreField from './fields/genre-field';
import UploadArtworkZone from './artwork/upload-artwork-zone';
import '../../../styles/components/upload/basic-info-page.scss';

const BasicInfoPage = ({ formType }) => {
  return (
    <form className="basic-info-page">
      <div className="playlist-details">
        <div className="artwork-section">
          <UploadArtworkZone />
        </div>
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
        </div>
      </div>
      <div className="uploaded-playlist" />
      <div className="upload-footer" />
    </form>
  );
};

export default reduxForm({
  form: 'audioUploadForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(BasicInfoPage);
