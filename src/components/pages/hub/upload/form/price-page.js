import React from 'react';
import Tooltip from 'react-tooltip';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import UploadedPlaylist from '../uploaded-playlist';
import validate from './validate';
import UploadArtwork from './upload-artwork';
import PriceField from './fields/price-field';
import CanPayMoreField from './fields/can-pay-more-field';
import PurchaseMessageField from './fields/purchase-message-field';
import '../../../../../styles/components/hub/upload/upload-form.scss';

const PricePage = (props) => {
  const { handleSubmit, previousPage, uploadForm, uploadInProgress } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="upload-playlist-detail">
        <UploadArtwork />
        <div className="upload-form-fields">
          <h1 className="upload-playlist-title">{uploadForm.values.title}</h1>
          {renderGenres(uploadForm.values.genres)}
          <Field name="price" type="number" component={PriceField} label="Price" />
          <p className="pricing-note"><span>Note: </span>{`Leave the price at zero if you intend for this ${uploadForm.values.playlistType.value} to be a free download. People can still decide to donate towards free downloads if you let them.`}</p>
          <Field name="canPayMore" type="checkbox" component={CanPayMoreField} />
          <Field name="purchaseMessage" type="textarea" component={PurchaseMessageField} label="Purchase Message" playlistType={uploadForm.values.playlistType.value} />
        </div>
      </div>
      <div className="uploaded-playlist-con">
        <UploadedPlaylist />
      </div>
      <div className="upload-form-footer">
        <div className="required-field-note">*Indicates required field</div>
        <div className="upload-form-action-btns">
          <button type="button" className="previous-btn" onClick={previousPage}>Back</button>
          <button type="submit" className="next-btn" disabled={uploadInProgress}><div data-tip data-for="next-btn">Next</div></button>
          {uploadInProgress && <Tooltip id="next-btn" type="info">Please wait for files to finish uploading</Tooltip>}
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

const composedForm = reduxForm({
  form: 'audioUpload',
  fields: [
    'price',
    'canPayMore',
    'purchaseMessage'
  ],             // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  validate
  // initialValues: { price: parseFloat(0.00).toFixed(2), canPayMore: true }
})(PricePage);

const mapStateToProps = (state) => {
  return {
    uploadForm: state.form.audioUpload
  };
};

export default connect(mapStateToProps)(composedForm);
