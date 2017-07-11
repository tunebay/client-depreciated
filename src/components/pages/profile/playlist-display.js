import React from 'react';
import { connect } from 'react-redux';
import Artwork from './artwork';
import PlaylistDisplayTracklist from './playlist-display-tracklist';
import PricePill from '../../common/price-pill';

const PlaylistDisplay = ({ player, playlist: { price, tracks, title, artwork, playlistType } }) => {
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
        {/* <PlaylistDisplayTracklist tracks={tracks} /> */}
        <div className="playlist-footer">
          <div className="footer-btns">
            <button className="icon-btn">
              <img className="heart icon" src="../../../../assets/images/heart.svg" alt="like-btn" />
            </button>
            <button className="icon-btn">
              <img className="share icon" src="../../../../assets/images/share.svg" alt="share-btn" />
            </button>
            <div className="icon-btn">
              <img className="comment icon" src="../../../../assets/images/comment.svg" alt="comment-btn" />
            </div>
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
