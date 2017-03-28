import React, { Component } from 'react';
import PricePill from '../../../common/price-pill';
import TrackList from './track-list';
import SingleTrack from './single-track';
import '../../../../styles/components/profile/music/index.scss';

class PlaylistDisplay extends Component {
  renderTrackOrTrackList() {
    const { tracks } = this.props.playlist;
    return tracks.length === 1 ?
      <SingleTrack track={tracks[0]} /> :
      <TrackList tracks={tracks} />;
  }
  render() {
    const { playlist } = this.props;
    return (
      <li className="playlist-display">
        <div className="artwork-detail-con">
          <div className="artwork" />
          <div className="detail">
            <div className="playlist-title-pill">
              {playlist.title}<PricePill price={playlist.price} />
            </div>
          </div>
        </div>
        {this.renderTrackOrTrackList()}
        <div className="playlist-footer" />
      </li>
    );
  }
}

export default PlaylistDisplay;
