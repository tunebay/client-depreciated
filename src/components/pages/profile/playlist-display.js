import React from 'react';

const PlaylistDisplay = ({ playlist }) => {
  return (
    <li className="playlist-display">
      <div className="artwork">
        <img className="artwork-image" src={playlist.artwork} alt="artwork" />
      </div>
      <div className="playlist-details">
        <div className="title">{playlist.title}</div>
      </div>
    </li>
  );
};

export default PlaylistDisplay;
