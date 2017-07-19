import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sound from 'react-sound';
import { connect } from 'react-redux';
// import Artwork from '../pages/profile/artwork';
import ReactPlayer from 'react-player';
import { ProgressBar, VolumeSlider } from 'react-player-controls';
// import formatSeconds from '../../util/format-seconds';
import * as actions from '../../actions/player-actions';
import '../../styles/components/player/player.scss';

class Player extends Component {
  constructor(props) {
    super(props);
    this.togglePlayPause = this.togglePlayPause.bind(this);
  }
  // handlePlaying(e) {
  //   this.props.updateTrackMilliseconds(e);
  // }

  togglePlayPause() {
    const { player } = this.props;
    const isPlaying = !player.isPlaying;
    this.props.updatePlayStatus(isPlaying);
  }

  handleSeek(seconds) {
    console.log('SEEK', seconds);
    // this.props.updatePlayedSeconds(seconds);
    this.player.seekTo(seconds / this.props.player.duration);
  }

  handleArtworkLoad() {
    this.props.updateArtworkLoadStatus();
  }

  handleVolumeChange(vol) {
    console.log('vol', vol);
    this.props.updateVolume(vol);
  }

  onPlayerProgress(progress) {
    this.props.updateProgress(progress);
    // console.log('Progress', progress);
  }

  onPlayerDuration(duration) {
    this.props.updateDuration(duration);
    // console.log('duration', duration);
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
    // console.log('PLAYER', player);
    if (player.visable) {
      return (
        <div id="player">
          {/* {this.renderSound(player)} */}
          <ProgressBar
            totalTime={player.duration}
            currentTime={player.progress.playedSeconds}
            isSeekable
            onSeek={this.handleSeek.bind(this)}
          />
          <ReactPlayer
            className="react-player"
            ref={(e) => { this.player = e; }}
            url={player.currentTrack.location}
            width={0}
            volume={player.volume}
            height={0}
            playing={player.isPlaying}
            progressFrequency={100}
            onProgress={this.onPlayerProgress.bind(this)}
            onDuration={this.onPlayerDuration.bind(this)}
          />
          <div id="player-content">
            <div id="player-left">
              <div id="player-artwork-con">
                <img
                  id="player-artwork"
                  src={player.playlist.artwork}
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
                <div id="now-playing-track-title">{player.currentTrack.name}</div>
                <Link to={`/${player.playlist.user.username}`} id="now-playing-artist">
                  {player.playlist.user.displayName}
                </Link>
              </div>
            </div>
            <div id="player-middle">
              <div className="controls">
                <img
                  src="../../../assets/images/shuffle.svg"
                  alt="shuffle"
                  className="shuffle control-icon"
                />
                <img
                  src="../../../assets/images/backwards.svg"
                  alt="backwards"
                  className="backwards control-icon"
                />
                <button onClick={this.togglePlayPause}>
                  <img
                    src="../../../assets/images/play.svg"
                    alt="play"
                    className="play control-icon"
                  />
                </button>
                <img
                  src="../../../assets/images/forwards.svg"
                  alt="forwards"
                  className="forwards control-icon"
                />
                <img
                  src="../../../assets/images/loop.svg"
                  alt="forwards"
                  className="loop control-icon"
                />
              </div>
            </div>
            <div id="player-right">
              {/* <VolumeSlider
                volume={player.volume}
                onVolumeChange={this.handleVolumeChange.bind(this)}
                isEnabled
              /> */}
            </div>
          </div>
        </div>
      );
    }
    return (null);
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.player
  };
};

export default connect(mapStateToProps, actions)(Player);
