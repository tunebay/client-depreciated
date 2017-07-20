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
    this.handleShuffleClick = this.handleShuffleClick.bind(this);
    this.handleBackwardsClick = this.handleBackwardsClick.bind(this);
    this.handleForwardsClick = this.handleForwardsClick.bind(this);
    this.handleLoopClick = this.handleLoopClick.bind(this);
  }
  // handlePlaying(e) {
  //   this.props.updateTrackMilliseconds(e);
  // }

  onPlayerProgress(progress) {
    this.props.updateProgress(progress);
    // console.log('Progress', progress);
  }

  onPlayerDuration(duration) {
    this.props.updateDuration(duration);
    // console.log('duration', duration);
  }

  handleBackwardsClick() {
    console.log('go back a track if < 5secs or beggning of track otherwise');
  }

  handleForwardsClick() {
    console.log('go fowards a track');
  }

  handleShuffleClick() {
    console.log('Shuffle plylist when track ends');
  }

  handleLoopClick() {
    console.log('Loop single track... playlist?');
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

  togglePlayPause() {
    const { player } = this.props;
    const isPlaying = !player.isPlaying;
    this.props.updatePlayStatus(isPlaying);
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
    const playOrPauseSVG = player.isPlaying ?
      'url("../../../../assets/images/pause.svg")' :
      'url("../../../../assets/images/player-play.svg")';

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
                <button
                  className="play-control"
                  onClick={this.handleShuffleClick}
                  style={{ backgroundImage: 'url("../../../assets/images/shuffle.svg")' }}
                />
                <button
                  className="play-control"
                  onClick={this.handleBackwardsClick}
                  style={{ backgroundImage: 'url("../../../assets/images/backwards.svg")' }}
                />
                <button
                  className="play-control"
                  onClick={this.togglePlayPause}
                  style={{ backgroundImage: playOrPauseSVG }}
                />
                <button
                  className="play-control"
                  onClick={this.handleForwardsClick}
                  style={{ backgroundImage: 'url("../../../assets/images/forwards.svg")' }}
                />
                <button
                  className="play-control"
                  onClick={this.handleLoopClick}
                  style={{ backgroundImage: 'url("../../../assets/images/loop.svg")' }}
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
