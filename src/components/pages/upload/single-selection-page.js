import React from 'react';
import { reduxForm } from 'redux-form';
import UploadArtworkZone from './artwork/upload-artwork-zone';
import PricePill from '../../common/price-pill';
import SingleSelection from './single-selection';
import '../../../styles/components/upload/single-selection-page.scss';

const SingleSelectionPage = ({ formValues, handleSubmit, handlePrevious, playlist }) => {
  console.log('PLAYLIST', playlist);
  return (
    <form onSubmit={handleSubmit} className="single-selection-page">
      <div className="playlist-details">
        <div className="artwork-section">
          <UploadArtworkZone />
        </div>
        <div className="field-section">
          <div className="basic-info-section">
            <div className="title-price">
              <div className="playlist-title">{formValues.title}</div>
              <PricePill price={formValues.price} />
            </div>
            <div className="genres">{renderGenres(formValues.genres)}</div>
          </div>
          <label className="single-label" htmlFor="single-selection">Single Selection</label>
          <p className="single-selection-text">Marking a track as a single allows you to offer the given track independently from your album.  This is a great option for songs you wish to sell seperately.</p>
          <p className="single-selection-text"><span className="note">Note:</span> It may be tempting to mark all tracks as singles, however, this is not reccomended as it takes away the incentive to download the whole {formValues.playlistType.value}. You can always mark tracks as singles at a later date. View the <span className="pricing-guide">Pricing Guide</span> for more information.</p>
        </div>
      </div>
      <SingleSelection playlist={playlist} />
      <div className="upload-footer">
        <div className="required-fields"><span className="required">*</span> Required feilds</div>
        <div className="action-btns">
          <button onClick={handlePrevious} type="button" className="back-btn">Previous</button>
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
      {labels.join(' | ')}
    </div>
  );
};

export default reduxForm({
  form: 'audioUploadForm',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true
})(SingleSelectionPage);
