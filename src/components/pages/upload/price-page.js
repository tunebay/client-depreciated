import React from 'react';
import { reduxForm, Field } from 'redux-form';
import className from 'classnames';
import priceField from './fields/price-field';
import canPayMoreField from './fields/can-pay-more-field';
import purchaseMessageField from './fields/purchase-message-field';
import UploadArtworkZone from './artwork/upload-artwork-zone';
import UploadedPlaylist from './uploaded-playlist';
import UploadFooter from './upload-footer';
import priceValidate from './price-validate';
import '../../../styles/components/upload/price-page.scss';

const PricePage = ({ formType, formValues, playlist, handleSubmit, handlePrevious, isReleasing, isUploading }) => {
  const singleProgress = playlist[0].progress;
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
    <form onSubmit={handleSubmit} className="price-page">
      <div className={detailClass}>
        <div className="artwork-section">
          <UploadArtworkZone />
        </div>
        <div className="field-section">
          <div className="basic-info-section">
            <div className="playlist-title">{formValues.title}</div>
          </div>
          <Field name="price" playlistType={formValues.playlistType.value} component={priceField} />
          <Field name="canPayMore" component={canPayMoreField} />
          <Field name="purchaseMessage" component={purchaseMessageField} />
        </div>
      </div>
      {renderPlaylist()}
      <UploadFooter
        formType={formType}
        handlePrevious={handlePrevious}
        singleProgress={singleProgress}
        isUploading={isUploading}
        isReleasing={isReleasing}
        page={'PRICE_PAGE'}
      />
    </form>
  );
};

export default reduxForm({
  form: 'audioUploadForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: priceValidate
})(PricePage);
