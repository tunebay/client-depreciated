import React, { Component } from 'react';
import Sound from 'react-sound';
import Icon from 'react-fontawesome';
import { connect } from 'react-redux';
import { ProgressBar } from 'react-player-controls';
import { Progress } from 'rc-progress';
import * as actions from '../../actions/player-actions';
import '../../styles/components/player/player.scss';

class Player extends Component {
  handlePlaying(e) {
    console.log(Math.round((e.position / 1000)));
    this.props.updateTrackMilliseconds(e);
  }

  handleSeek(e) {
    this.props.updateTrackMiliPosition(e)
    console.log('Seek Position', e);
  }

  renderSound(player) {
    if (!player.visable) return <div />;
    // console.log('POSITION', player.currentTrack.position);
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
          <div className="now-playing">
            <div className="player-artwork">
              <Icon name="music" size="lg" />
            </div>

            <div className="now-playing-text">
              <div className="playing-track">{player.currentTrack.name}</div>
              <div className="playing-artist">{player.currentTrack.artist}</div>
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
