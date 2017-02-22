import React, { Component } from 'react';
import v4 from 'node-uuid';
import { connect } from 'react-redux';
import { SortableContainer } from 'react-sortable-hoc';
import * as actions from '../../../../actions/hub/upload-actions';
import UploadedTrack from './uploaded-track';

const SortableList = SortableContainer(({ tracks }) => {
  console.log('in list rendering:', tracks);
  return (
    <ul>
      {tracks.map((track, index) => {
        const key = v4();
        const playlistPosition = index + 1;
        console.log(`${track.name} is at position ${playlistPosition}`);
        return (
          <UploadedTrack
            key={key}
            index={index}
            value={track.name}
            playlistPosition={playlistPosition}
          />
        );
      })}
    </ul>
  );
});

class SortableComponent extends Component {
  onSortEnd({ oldIndex, newIndex }) {
    this.props.updateTrackPositions(this.props.tracks, oldIndex, newIndex);
  }

  render() {
    const { tracks } = this.props;
    return (
      <SortableList tracks={tracks} onSortEnd={this.onSortEnd.bind(this)} useDragHandle />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.upload.tracks
  };
};

export default connect(mapStateToProps, actions)(SortableComponent);
