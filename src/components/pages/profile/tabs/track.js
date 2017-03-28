import React, { Component } from 'react';
import className from 'classnames';
import { connect } from 'react-redux';
import PricePill from '../../../common/price-pill';
import formatSeconds from '../../../../util/format-seconds';
import * as actions from '../../../../actions/player-actions';
import '../../../../styles/components/profile/music/track.scss';

class Track extends Component {
  handlePlayClick() {
    const { track, tracks, addTrackToPlayer } = this.props;
    console.log(`Play ${track.name}`);
    addTrackToPlayer(track, tracks);
  }

  renderPriceOrPlaylistOnly() {
    const { track } = this.props;
    return track.single ?
      <div className="track-price"><PricePill button price={track.trackPrice} /></div> :
      <div className="track-price">{`${track.playlistType} only`}</div>;
  }

  render() {
    const { track } = this.props;
    const trackClass = className({
      'track-container': true,
      'odd-track': track.position % 2 !== 0,
      'even-track': track.position % 2 === 0
    });

    return (
      <li className={trackClass} key={track.position}>
        <button onClick={this.handlePlayClick.bind(this)}>Play</button>
        <div className="track-position">{track.position}</div>
        <div className="track-name">{track.name}</div>
        <div className="track-duration">{formatSeconds(track.duration)}</div>
        {this.renderPriceOrPlaylistOnly(track)}
      </li>
    );
  }
}

export default connect(null, actions)(Track);
