import React from 'react';
import { reduxForm } from 'redux-form';
import UploadedPlaylist from '../uploaded-playlist';
import '../../../../../styles/components/hub/upload/upload-form.scss';

const SingleSelectionPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="upload-playlist-detail">
        <div className="artwork-section">
          <div className="artwork-placeholder" />
        </div>
        <div className="upload-form-fields">
          <p>No fields actuallyo n this page</p>
        </div>
      </div>
      <div className="uploaded-playlist-con">
        <UploadedPlaylist />
      </div>
      <div className="upload-form-footer">
        <div className="required-field-note" />
        <div className="upload-form-action-btns">
          <button type="button" className="previous-btn" onClick={previousPage}>back</button>
          <button type="submit" className="next-btn">Release</button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'audioUpload',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(SingleSelectionPage);
