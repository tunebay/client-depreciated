import React from 'react';
import { reduxForm, Field } from 'redux-form';
import priceField from './fields/price-field';
import UploadArtworkZone from './artwork/upload-artwork-zone';
import UploadedPlaylist from './uploaded-playlist';
import '../../../styles/components/upload/price-page.scss';

const PricePage = ({ formValues, handleSubmit, handleCancel }) => {
  return (
    <form onSubmit={handleSubmit} className="price-page">
      <div className="playlist-details">
        <div className="artwork-section">
          <UploadArtworkZone />
        </div>
        <div className="field-section">
          <div className="basic-info">
            <div className="title-pill-con">
              <div className="playlist-title">{formValues.title}</div>
            </div>
            <div className="genres">{renderGenres(formValues.genres)}</div>
          </div>
          <Field name="price" component={priceField} />
        </div>
      </div>
      <UploadedPlaylist />
      <div className="upload-footer">
        <div className="required-fields"><span className="required">*</span> Required feilds</div>
        <div className="action-btns">
          <button onClick={handleCancel} type="button" className="back-btn">Previous</button>
          <button type="submit" className="next-btn">Next</button>
        </div>
      </div>
    </form>
  );
};

const renderGenres = (genresArray) => {
  const labels = genresArray.map(genre => genre.label);
  return (
    <div className="uploaded-genres">
      {labels.join(' / ')}
    </div>
  );
};

export default reduxForm({
  form: 'audioUploadForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
  // validate: PriceValidate
})(PricePage);
