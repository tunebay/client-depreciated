import React from 'react';
import { reduxForm, Field } from 'redux-form';
import titleField from './fields/title-field';
import playlistTypeField from './fields/playlist-type-field';
import releaseDateField from './fields/release-date-field';
import genreField from './fields/genre-field';
import UploadArtworkZone from './artwork/upload-artwork-zone';
import UploadedPlaylist from './uploaded-playlist';
import UploadedSingle from './uploaded-single';
import basicInfoValidate from './basic-info-validate';
import '../../../styles/components/upload/basic-info-page.scss';

const BasicInfoPage = ({ formType, handleSubmit, handleCancel }) => {
  return (
    <form onSubmit={handleSubmit} className="basic-info-page">
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
      {renderPlaylist(formType)}
      <div className="upload-footer">
        <div className="required-fields"><span className="required">*</span> Required feilds</div>
        <div className="action-btns">
          <button onClick={handleCancel} type="button" className="back-btn">Cancel</button>
          <button type="submit" className="next-btn">Next</button>
        </div>
      </div>
    </form>
  );
};

const renderPlaylist = (formType) => {
  if (formType === 'SINGLE') {
    return <UploadedSingle />;
  }
  return <UploadedPlaylist />;
};

export default reduxForm({
  form: 'audioUploadForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  initialValues: {
    price: parseFloat(0.00).toFixed(2),
    canPayMore: true,
  },
  validate: basicInfoValidate
})(BasicInfoPage);
