import React from 'react';
import '../../../../styles/components/profile/music/track-list.scss';

const SingleTrack = ({ track }) => {
  return (
    <div className="single-track">
      {track.position}
      {track.name}
      {track.trackPrice}
      {track.single}
    </div>
  );
};

export default SingleTrack;
