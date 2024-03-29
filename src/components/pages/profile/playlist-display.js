import React, { Component } from 'react';
import { connect } from 'react-redux';
import Artwork from './artwork';
import * as actions from '../../../actions/player-actions';
import PricePill from '../../common/price-pill';

class PlaylistDisplay extends Component {
  constructor(props) {
    super(props);
    this.togglePlayClick = this.togglePlayClick.bind(this);
  }

  togglePlayClick() {
    const { player, playlist } = this.props;
    if (player.isPlaying && player.playlist.id === playlist.id) {
      console.log('here');
      this.props.updatePlayStatus(false);
    } else {
      this.props.addPlaylistToPlayer(this.props.playlist);
      console.log('Sent playlist to player here');
    }
  }

  render() {
    const { player, playlist: {
      price, tracks, title, artwork, numberOfTracks, id, playlistType, permalink
    } } = this.props;

    const btnSrc = (
      player.isPlaying && player.playlist.id === id ?
        '../../../../assets/images/white-pause.svg' :
        '../../../../assets/images/triangle.svg'
    );

    // console.log('permalink', permalink.substr(19));

    return (
      <li className="playlist-display">
        <Artwork
          linkTo={permalink.substr(19)}
          artwork={artwork}
          title={title}
          numberOfTracks={numberOfTracks}
        />
        <div className="playlist-details">
          <div className="title">
            {title} <PricePill price={price} />
          </div>
          <div className="playlist-player">
            <button
              onClick={this.togglePlayClick}
              className="btn-span-wrapper"
            >
              <span className="play-btn">
                <img
                  src={btnSrc}
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
              <button id="quicklook">View {playlistType}</button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.player
  };
};

export default connect(mapStateToProps, actions)(PlaylistDisplay);
