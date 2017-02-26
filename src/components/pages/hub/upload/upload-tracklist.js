import React, { Component } from 'react';
import v4 from 'node-uuid';
import { connect } from 'react-redux';
import { SortableContainer } from 'react-sortable-hoc';
import * as actions from '../../../../actions/hub/upload-actions';
import UploadedTrack from './uploaded-track';
import '../../../../styles/components/hub/uploaded-track.scss';


const SortableList = SortableContainer(({ tracks }) => {
  // console.log('in list rendering:', tracks);
  return (
    <ul className="uploaded-track-con">
      {tracks.map((track, index) => {
        const key = v4();
        const playlistIndex = index;
        // console.log(`${track.name} is at position ${playlistPosition}`);
        return (
          <UploadedTrack
            key={key}
            index={index}
            value={track.name}
            playlistIndex={playlistIndex}
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

  onSortStart() {
    this.props.stopUpdatingProgress(); // stop weird moving bug
  }

  render() {
    const { tracks } = this.props;
    return (
      <SortableList
        tracks={tracks}
        onSortEnd={this.onSortEnd.bind(this)}
        onSortStart={this.onSortStart.bind(this)}
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
    tracks: state.upload.tracks
  };
};

export default connect(mapStateToProps, actions)(SortableComponent);
