import React, { Component } from 'react';
import Sound from 'react-sound';
import Icon from 'react-fontawesome';
import { connect } from 'react-redux';
import { ProgressBar, VolumeSlider } from 'react-player-controls';
import Artwork from '../pages/profile/artwork';
import formatSeconds from '../../util/format-seconds';
import * as actions from '../../actions/player-actions';
import '../../styles/components/player/player.scss';

class Player extends Component {
  handlePlaying(e) {
    this.props.updateTrackMilliseconds(e);
  }

  togglePlayPause() {
    const { player } = this.props;
    const status = player.playStatus === 'PAUSED' ? 'PLAYING' : 'PAUSED';
    this.props.updatePlayStatus(status);
  }

  handleSeek(e) {
    this.props.updateTrackMiliPosition(e);
  }

  renderSound(player) {
    if (player.visable) {
      return (
        <Sound
          url={player.currentTrack.location}
          volume={player.volume}
          playStatus={player.playStatus}
          position={player.currentTrack.miliPosition}
          onPlaying={this.handlePlaying.bind(this)}
        />
      );
    }
  }

  render() {
    const { player } = this.props;
    console.log('PLAYER', player);
    return (
      <div id="player">
        {this.renderSound(player)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.player
  };
};

export default connect(mapStateToProps, actions)(Player);
