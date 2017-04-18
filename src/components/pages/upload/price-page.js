import React from 'react';
import { reduxForm, Field } from 'redux-form';
import priceField from './fields/price-field';
import UploadArtworkZone from './artwork/upload-artwork-zone';
import UploadedPlaylist from './uploaded-playlist';
import '../../../styles/components/upload/basic-info-page.scss';

const PricePage = ({ formType, handleSubmit, handleCancel }) => {
  return (
    <form onSubmit={handleSubmit} className="price-page">
      <div className="playlist-details">
        <div className="artwork-section">
          <UploadArtworkZone />
        </div>
        <div className="field-section">
          <Field name="price" component={priceField} formType={formType} />
        </div>
      </div>
      <UploadedPlaylist />
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

export default reduxForm({
  form: 'audioUploadForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
  // validate: PriceValidate
})(PricePage);
