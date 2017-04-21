import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import SingleSelection from '../single-selection';
import UploadArtwork from './upload-artwork';
import PricePill from '../../../../common/price-pill';
import '../../../../../styles/components/hub/upload/upload-form.scss';

const SingleSelectionPage = (props) => {
  const { handleSubmit, previousPage, uploadForm } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="upload-playlist-detail">
        <UploadArtwork />
        <div className="upload-form-fields">
          <div className="title-pill-genre-con">
            <div className="title-pill-con">
              <h1 className="upload-playlist-title">{uploadForm.values.title}</h1>
              <PricePill price={uploadForm.values.price} />
            </div>
            {renderGenres(uploadForm.values.genres)}
          </div>
          <label className="upload-label" htmlFor="single-selection">Single Selection</label>
          <p className="single-selection-text">Marking a track as a single allows you to offer the given track independently from your album.  This is a great option for songs you wish to sell seperately.</p>
          <p className="single-selection-text"><span>Note:</span> It may be tempting to mark all tracks as singles, however, this is not reccomended as it takes away the incentive to download the whole album. You can always mark tracks as singles at a later date.</p>
        </div>
      </div>
      <div className="uploaded-playlist-con">
        <SingleSelection />
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

const renderGenres = (genresArray) => {
  const labels = genresArray.map(genre => genre.label);
  return (
    <div className="uploaded-genres">
      {labels.join(' / ')}
    </div>
  );
};

const ComposedForm = reduxForm({
  form: 'audioUpload',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
})(SingleSelectionPage);

const mapStateToProps = (state) => {
  return {
    uploadForm: state.form.audioUpload
  };
};

export default connect(mapStateToProps)(ComposedForm)
