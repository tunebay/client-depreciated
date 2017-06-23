import React from 'react';
import Artwork from './artwork';
import PricePill from '../../common/price-pill';

const PlaylistDisplay = ({ playlist }) => {
  return (
    <li className="playlist-display">
      <Artwork artwork={playlist.artwork} title={playlist.title} />
      <div className="playlist-details">
        <div className="title">
          {playlist.title} <PricePill price={playlist.price} />
        </div>
      </div>
    </li>
  );
};

export default PlaylistDisplay;
