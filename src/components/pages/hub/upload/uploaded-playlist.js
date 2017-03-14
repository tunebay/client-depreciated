import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SortableContainer } from 'react-sortable-hoc';
import UploadedTrack from './uploaded-track';
import * as actions from '../../../../actions/hub/uploaded-playlist-actions';

const SortablePlaylist = SortableContainer(({ playlist }) => {
  return (
    <ul>
      {playlist.map((track, index) =>
        <UploadedTrack track={track} key={track.trackId} index={index} />
      )}
    </ul>
  );
});

class UploadedPlaylist extends Component {
  onSortEnd({ oldIndex, newIndex }) {
    const { playlist } = this.props;
    this.props.updateTrackPosition(playlist, oldIndex, newIndex);
  }

  render() {
    const { playlist } = this.props;
    // console.log('PLAYLIST:', playlist);
    return (
      <SortablePlaylist
        playlist={playlist}
        onSortEnd={this.onSortEnd.bind(this)}
        useDragHandle
        axis="y"
        lockAxis="y"
        lockToContainerEdge
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.uploadedPlaylist
  };
};

export default connect(mapStateToProps, actions)(UploadedPlaylist);
