import React from 'react';
import { connect } from 'react-redux';
import Artwork from './artwork';
// import WaveForm from '../../common/waveform';
import PricePill from '../../common/price-pill';

const PlaylistDisplay = ({ player, playlist: { price, tracks, title, artwork } }) => {
  // console.log('tracks', tracks);
  return (
    <li className="playlist-display">
      <Artwork artwork={artwork} title={title} />
      <div className="playlist-details">
        <div className="title">
          {title} <PricePill price={price} />
        </div>
        <div className="playlist-player">
          <button className="btn-span-wrapper">
            <span className="play-btn">
              <img
                src="../../../../assets/images/triangle.svg"
                alt="play"
                className="play"
              />
            </span>
          </button>
          <div className="track-to-play">
            <div className="track-title">
              {tracks[0].name}
            </div>
            <div className="playlist-player-title">
              {title}
            </div>
          </div>
        </div>
        <div className="tracklist" />
        <div className="playlist-footer">
          <div className="footer-btns">
            <button id="quicklook">Quick look</button>
          </div>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    player: state.player
  };
};

export default connect(mapStateToProps)(PlaylistDisplay);
