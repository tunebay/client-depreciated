import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../../styles/components/hub/uploaded-track.scss';

class TrackNameInput extends Component {
  handleInputChange(e) {
    console.log('CHANGE', e.target.value);
    this.setState({ value: e.target.value });
  }

  render() {
    const { tracks, playlistIndex } = this.props;
    console.log('TRACKS: ', tracks);
    return (
      <input
        type="text"
        className="track-name-input"
        value={tracks[playlistIndex].name}
        onChange={this.handleInputChange.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.upload.tracks
  };
};

export default connect(mapStateToProps)(TrackNameInput);
