import React from 'react';
import '../../../../styles/components/profile/music/index.scss';

const PlaylistDisplay = ({ playlist }) => {
  return (
    <li className="playlist-display">
      <div className="artwork-detail-con">
        <div className="artwork" />
        <div className="detail">
          {playlist.title}
        </div>
      </div>
    </li>
  );
};

export default PlaylistDisplay;
