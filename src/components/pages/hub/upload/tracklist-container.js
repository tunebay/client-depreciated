import React from 'react';
import UploadTracklist from './upload-tracklist';
import '../../../../styles/components/hub/upload.scss';

const TracklistContainer = () => {
  return (
    <div className="tracklist-container">
      <UploadTracklist />
      <div className="add-another-track" />
    </div>
  );
};

export default TracklistContainer;
