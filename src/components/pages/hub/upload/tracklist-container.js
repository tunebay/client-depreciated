import React from 'react';
import UploadTracklist from './upload-tracklist';
import '../../../../styles/components/hub/upload.scss';

const TracklistContainer = () => {
  return (
    <div className="tracklist-container">
      <UploadTracklist />
      <div className="add-another-track">
        <div className="add-another-track-text">Add another track</div>
      </div>
    </div>
  );
};

export default TracklistContainer;
