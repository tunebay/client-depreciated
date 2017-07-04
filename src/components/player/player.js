import React, { Component } from 'react';
import Sound from 'react-sound';
import { connect } from 'react-redux';
// import Artwork from '../pages/profile/artwork';
import ReactPlayer from 'react-player';
import { ProgressBar } from 'react-player-controls';
// import formatSeconds from '../../util/format-seconds';
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

  handleSeek(seconds) {
    console.log('SEEK', seconds);
    // this.props.updatePlayedSeconds(seconds);
    this.player.seekTo(seconds / this.props.player.duration);
  }

  handleArtworkLoad() {
    this.props.updateArtworkLoadStatus();
  }

  onPlayerProgress(progress) {
    this.props.updateProgress(progress);
    console.log('Progress', progress);
  }

  onPlayerDuration(duration) {
    this.props.updateDuration(duration);
    console.log('duration', duration);
  }

  // renderSound(player) {
  //   if (player.visable) {
  //     return (
  //       <Sound
  //         url={player.currentTrack.location}
  //         volume={player.volume}
  //         playStatus={player.playStatus}
  //         position={player.currentTrack.miliPosition}
  //         onPlaying={this.handlePlaying.bind(this)}
  //       />
  //     );
  //   }
  // }

  render() {
    const { player } = this.props;
    console.log('PLAYER', player);
    return (
      <div id="player">
        {/* {this.renderSound(player)} */}
        <ProgressBar
          totalTime={player.duration}
          currentTime={player.progress.playedSeconds}
          isSeekable
          onSeek={this.handleSeek.bind(this)}
        />
        <div id="player-content">
          <ReactPlayer
            ref={(e) => { this.player = e; }}
            url={'https://tunebay-upload.s3-eu-west-2.amazonaws.com/users/music/bbb77e4d-7b08-4198-98c3-8c800959dd09'}
            width={0}
            height={0}
            playing
            progressFrequency={100}
            onProgress={this.onPlayerProgress.bind(this)}
            onDuration={this.onPlayerDuration.bind(this)}
          />
          <div id="player-left">
            <div id="player-artwork-con">
              <img
                id="player-artwork"
                src="https://tunebay-upload.s3-eu-west-2.amazonaws.com/users/artwork/0bb8388c-53c0-4ed7-9b99-d836e83082d9"
                alt="art"
                onLoad={this.handleArtworkLoad.bind(this)}
              />
            </div>
            <img
              src="../../../assets/images/vertical-dots.svg"
              alt="playing-menu"
              className="vertical-dots"
            />
            <div className="now-playing">
              <div id="now-playing-track-title">Hit The Ground Running</div>
              <div id="now-playing-artist">The Keepsakes</div>
            </div>
          </div>
          <div id="player-middle" />
          <div id="player-right" />
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
