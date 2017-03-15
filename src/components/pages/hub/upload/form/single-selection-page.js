import React from 'react';
import { reduxForm } from 'redux-form';
import UploadedPlaylist from '../uploaded-playlist';

const SingleSelectionPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="upload-playlist-detail">
        <div className="artwork-section" />
        <div className="upload-form-fields">
          <p>No fields actuallyo n this page</p>
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
})(SingleSelectionPage);
