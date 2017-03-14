import React, { Component } from 'react';
import v4 from 'node-uuid';
import { connect } from 'react-redux';
import UploadedTrack from './uploaded-track';

class UploadedPlaylist extends Component {
  render() {
    return (
      <ul>
        {this.props.playlist.map(track =>
          <UploadedTrack track={track} key={v4()} />
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.uploadedPlaylist
  };
};

export default connect(mapStateToProps)(UploadedPlaylist);
