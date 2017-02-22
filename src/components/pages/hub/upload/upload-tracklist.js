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
        console.log('individual track', track);
        const key = v4();
        return <UploadedTrack key={key} index={index} value={track.name} />;
      })}
    </ul>
  );
});

class SortableComponent extends Component {
  onSortEnd({ oldIndex, newIndex }) {
    this.props.updateTrackPositions(this.props.tracks, oldIndex, newIndex);
  }

  render() {
    return (
      <SortableList tracks={this.props.tracks} onSortEnd={this.onSortEnd.bind(this)} useDragHandle />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.upload.tracks
  };
};

export default connect(mapStateToProps, actions)(SortableComponent);
