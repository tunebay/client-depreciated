import React, { Component } from 'react';
import { connect } from 'react-redux';
import UploadedTrack from './uploaded-track';
import * as actions from '../../../../actions/hub/uploaded-playlist-actions';

class UploadedPlaylist extends Component {
  render() {
    console.log('Playlist:', this.props.playlist);
    return (
      <ul>
        {this.props.playlist.map((track, index) =>
          <UploadedTrack track={track} key={track.trackId} index={index} />
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

export default connect(mapStateToProps, actions)(UploadedPlaylist);
