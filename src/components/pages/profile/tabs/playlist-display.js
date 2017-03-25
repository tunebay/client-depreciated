import React from 'react';
import '../../../../styles/components/profile/music/index.scss';

const PlaylistDisplay = ({ playlist }) => {
  const tracks = playlist.tracks;
  return (
    <li className="playlist-display">
      <div className="artwork-detail-con">
        <div className="artwork" />
        <div className="detail">
          {playlist.title}
          <ul>
            {tracks.map((track) => {
              return (
                <li key={track.position}>
                  {`${track.position}: ${track.name}`}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default PlaylistDisplay;
