import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProgressBar, PlaybackControls } from 'react-player-controls';
import '../../styles/components/player/player.scss';

class Player extends Component {
  render() {
    return (
      <div className="player">
        {/* <ProgressBar
          totalTime={this.state.totalTime}
          currentTime={this.state.currentTime}
          isSeekable={this.state.isSeekable}
          onSeek={time => this.setState(() => ({ currentTime: time }))}
          onSeekStart={time => this.setState(() => ({ lastSeekStart: time }))}
          onSeekEnd={time => this.setState(() => ({ lastSeekEnd: time }))}
        /> */}
        <div className="player-content">
          <div className="player-artwork" />
        </div>
      </div>
    );
  }
}

export default connect()(Player);
