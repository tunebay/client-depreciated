import React from 'react';
import Track from './track';
import '../../../../styles/components/profile/music/track-list.scss';

const TrackList = ({ tracks }) => {
  return (
    <div>
      <ul className="track-headers">
        <li id="name" className="track-header">Name</li>
        <li id="time" className="track-header">Time</li>
        <li id="buy" className="track-header">Buy</li>
      </ul>
      <ul className="track-list">
        {tracks.map((track) => {
          return <Track track={track} key={track.position} />;
        })}
      </ul>
    </div>
  );
};

export default TrackList;
