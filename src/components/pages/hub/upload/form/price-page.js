import React from 'react';
import { Field, reduxForm } from 'redux-form';
import UploadedPlaylist from '../uploaded-playlist';
import PriceField from './fields/price-field';
import CanPayMoreField from './fields/can-pay-more-field';


const PricePage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="upload-playlist-detail">
        <div className="artwork-section" />
        <div className="upload-form-fields">
          <Field name="price" type="number" component={PriceField} label="Price" />
          <Field name="canPayMore" type="checkbox" component={CanPayMoreField} />
        </div>
      </div>
      <div className="uploaded-playlist-con">
        <UploadedPlaylist />
      </div>
      <div className="upload-form-footer">
        <div>*Indicates required field</div>
        <div className="uploadform-action-btns">
          <button type="button" className="previous" onClick={previousPage}>Previous</button>
          <button type="submit" className="next">Next</button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'audioUpload',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  initialValues: { price: 0.00, canPayMore: true }
})(PricePage);
