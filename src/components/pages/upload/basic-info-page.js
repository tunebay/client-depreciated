import React from 'react';
import { reduxForm, Field } from 'redux-form';
import className from 'classnames';
import titleField from './fields/title-field';
import playlistTypeField from './fields/playlist-type-field';
import releaseDateField from './fields/release-date-field';
import genreField from './fields/genre-field';
import UploadArtworkZone from './artwork/upload-artwork-zone';
import UploadedPlaylist from './uploaded-playlist';
import UploadFooter from './upload-footer';
import basicInfoValidate from './basic-info-validate';
import '../../../styles/components/upload/basic-info-page.scss';

const BasicInfoPage = ({ formType, handleSubmit, handlePrevious, playlist }) => {
  const singleProgress = playlist[0].progress;
  console.log(singleProgress);
  const detailClass = className({
    'playlist-details': true,
    'multi-form-details': formType === 'MULTI'
  });

  const renderPlaylist = () => {
    if (formType === 'MULTI') {
      return <UploadedPlaylist />;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="basic-info-page">
      <div className={detailClass}>
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
      {renderPlaylist()}
      <UploadFooter
        formType={formType}
        handlePrevious={handlePrevious}
        singleProgress={singleProgress}
        page={'BASIC_INFO_PAGE'}
      />
    </form>
  );
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
