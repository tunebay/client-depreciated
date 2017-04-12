import React, { Component } from 'react';
import Sound from 'react-sound';
import Icon from 'react-fontawesome';
import { connect } from 'react-redux';
import { ProgressBar, VolumeSlider } from 'react-player-controls';
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
    return (
      <div className="player">
        <ProgressBar
          totalTime={player.currentTrack.miliDuration} // seconds
          currentTime={player.currentTrack.miliPosition} // milliseconds
          isSeekable
          onSeek={this.handleSeek.bind(this)}
        />
        {this.renderSound(player)}

        <div className="player-content">
          <div className="player-left">

            <div className="player-artwork">
              <Icon name="music" size="lg" />
            </div>

            <div className="playback-controls">
              <div className="icon-div">
                <Icon className="player-icon" name="step-backward" size="lg" />
              </div>
              <div className="icon-div">
                <Icon
                  onClick={this.togglePlayPause.bind(this)}
                  className="player-icon"
                  name={player.playStatus === 'PLAYING' ? 'pause' : 'play'}
                  size="lg"
                />
              </div>
              <div className="icon-div">
                <Icon
                  className="player-icon"
                  name="step-forward" size="lg"
                />
              </div>
              <div className="icon-div repeat-icon">
                <Icon
                  className="player-icon"
                  name="repeat"
                />
              </div>
            </div>

            <div className="elapsed-time">
              {formatSeconds(Math.floor(player.currentTrack.miliPosition / 1000) || 0)}
            </div>

          </div>

          <div className="player-center">
            <div className="playing-track">{player.currentTrack.name}</div>
            <div className="seperator"> - </div>
            <div className="playing-artist">{player.currentTrack.artist}</div>
          </div>

          <div className="player-right">
            <div className="full-time">
              {formatSeconds(player.currentTrack.duration || 0)}
            </div>
            <div className="buy">
              <button onClick={() => console.log('buy')} className="buy-btn">
                {`Buy ${player.currentTrack.playlistType}`}
              </button>
            </div>
            <div className="volume">
              <Icon name="volume-off" className="icon" />
              <VolumeSlider className="VolumeSlider" volume={30} />
              <Icon name="volume-up" className="volume-up icon" />
            </div>
          </div>

        </div>
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
