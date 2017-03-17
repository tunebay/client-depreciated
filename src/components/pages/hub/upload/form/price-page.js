import React from 'react';
import { Field, reduxForm } from 'redux-form';
import UploadedPlaylist from '../uploaded-playlist';
import validate from './validate';
import PriceField from './fields/price-field';
import CanPayMoreField from './fields/can-pay-more-field';
import PurchaseMessageField from './fields/purchase-message-field';
import '../../../../../styles/components/hub/upload/upload-form.scss';

const PricePage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="upload-playlist-detail">
        <div className="artwork-section">
          <div className="artwork-placeholder" />
        </div>
        <div className="upload-form-fields">
          <Field name="price" type="number" component={PriceField} label="Price" />
          <p className="pricing-note"><span>Note: </span>{`Leave the price at zero if you intend for this ${'playlistType.value'} to be a free download. People can still decide to donate towards free downloads if you let them.`}</p>
          <Field name="canPayMore" type="checkbox" component={CanPayMoreField} />
          <Field name="purchaseMessage" type="textarea" component={PurchaseMessageField} label="Purchase Message" />
        </div>
      </div>
      <div className="uploaded-playlist-con">
        <UploadedPlaylist />
      </div>
      <div className="upload-form-footer">
        <div className="required-field-note">*Indicates required field</div>
        <div className="upload-form-action-btns">
          <button type="button" className="previous-btn" onClick={previousPage}>Back</button>
          <button type="submit" className="next-btn">Next</button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
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
