import React from 'react';
import { reduxForm, Field } from 'redux-form';
import className from 'classnames';
import priceField from './fields/price-field';
import canPayMoreField from './fields/can-pay-more-field';
import purchaseMessageField from './fields/purchase-message-field';
import UploadArtworkZone from './artwork/upload-artwork-zone';
import UploadedPlaylist from './uploaded-playlist';
import UploadedSingle from './uploaded-single';
import priceValidate from './price-validate';
import '../../../styles/components/upload/price-page.scss';

const PricePage = ({ formType, formValues, handleSubmit, handlePrevious, isReleasing }) => {
  window.scrollTo(0, 0);
  const detailClass = className({
    'playlist-details': true,
    'multi-form-details': formType === 'MULTI'
  });
  const footerClass = className({
    'upload-footer': true,
    'multi-footer': formType === 'MULTI'
  });

  const renderPlaylist = () => {
    if (formType === 'SINGLE') {
      return <UploadedSingle />;
    }
    return <UploadedPlaylist />;
  };

  const renderButtonContent = () => {
    if (isReleasing) {
      return <img src="../../../../assets/images/ring-loading.svg" alt="loading" className="ring-loading" />;
    }
    return formType === 'MULTI' ? 'Next' : 'Release';
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
      <div className={footerClass}>
        <div className="required-fields"><span className="required">*</span> Required feilds</div>
        <div className="action-btns">
          <button onClick={handlePrevious} type="button" className="back-btn">Previous</button>
          <button type="submit" className="next-btn">
            {renderButtonContent()}
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'audioUploadForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate: priceValidate
})(PricePage);
