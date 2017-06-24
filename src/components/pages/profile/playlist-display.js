import React from 'react';
import Artwork from './artwork';
import PricePill from '../../common/price-pill';

const PlaylistDisplay = ({ playlist: { price, tracks, title, artwork } }) => {
  // console.log('tracks', tracks);
  return (
    <li className="playlist-display">
      <Artwork artwork={artwork} title={title} />
      <div className="playlist-details">
        <div className="title">
          {title} <PricePill price={price} />
        </div>
        <div className="playlist-player">
          <button className="play-btn">
            <img
              src="../../../../assets/images/triangle.svg"
              alt="play"
              className="play"
            />
          </button>
          <div className="track-to-play">
            <div className="track-title">
              {`${tracks[0].playlistPosition}. ${tracks[0].name}`}
            </div>
            <div className="playlist-player-title">
              {title}
            </div>
          </div>
        </div>
        <div className="waveform" />
        <div className="playlist-footer" />
      </div>
    </li>
  );
};

export default PlaylistDisplay;
