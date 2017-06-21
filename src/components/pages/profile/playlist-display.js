import React from 'react';
import Artwork from './artwork';

const PlaylistDisplay = ({ playlist }) => {
  return (
    <li className="playlist-display">
      <Artwork artwork={playlist.artwork} />
      <div className="playlist-details">
        <div className="title">{playlist.title}</div>
      </div>
    </li>
  );
};

export default PlaylistDisplay;
