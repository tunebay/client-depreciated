import React, { Component } from 'react';
import Sound from 'react-sound';
import Icon from 'react-fontawesome';
import { connect } from 'react-redux';
import * as actions from '../../actions/player-actions';
import '../../styles/components/player/player.scss';

class Player extends Component {
  handlePlaying(e) {
    this.props.updateTrackPosition(e.position);
  }

  handleSongLoading(e) {
    console.log('LOADING', e.duration);
  }

  renderSound(player) {
    if (!player.visable) return <div />;
    // console.log('POSITION', player.currentTrack.position);
    return (
      <Sound
        url={player.currentTrack.location}
        volume={player.volume}
        playStatus={player.playStatus}
        position={player.currentTrack.position}
        onLoading={this.handleSongLoading.bind(this)}
        onPlaying={this.handlePlaying.bind(this)}
      />
    );
  }

  render() {
    const { player } = this.props;
    console.log('Status', Sound.status.PLAYING);
    return (
      <div className="player">
        {this.renderSound(player)}

        <div className="player-content">
          <div className="now-playing">
            <div className="player-artwork">
              <Icon name="music" size="lg" />
            </div>
            <div className="playing-text">
              <div className="playing-track">{player.currentTrack.name}</div>
              <div className="playing-artist">{player.currentTrack.name}</div>
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
