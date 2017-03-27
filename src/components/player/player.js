import React, { Component } from 'react';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { ProgressBar, PlaybackControls } from 'react-player-controls';
import '../../styles/components/player/player.scss';

class Player extends Component {
  handlePlaying(e) {
    console.log(`${e.position} / ${e.duration}`);
  }

  renderSound(player) {
    if (!player.visable) return <div />;
    return (
      <Sound
        url={player.currentTrack.location}
        volume={player.volume}
        playStatus={player.playStatus}
        playFromPosition={300}
        // position={player.currentTrack.position}
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
          <div className="player-artwork" />
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

export default connect(mapStateToProps)(Player);
