import React, { Component } from 'react';
import v4 from 'node-uuid';
import { connect } from 'react-redux';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import UploadedTrack from './uploaded-track';

const SortableList = SortableContainer(({ tracks }) => {
  return (
    <ul>
      {tracks.map((track, index) => {
        const key = v4();
        return <UploadedTrack key={key} index={index} value={track} />;
      })}
    </ul>
  );
});

class SortableComponent extends Component {
  componentWillMount() {
    this.state = {
      tracks: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    };
    console.log(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    const { tracks } = this.state;

    this.setState({
      tracks: arrayMove(tracks, oldIndex, newIndex)
    });
  }

  render() {
    const { tracks } = this.state;

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

export default connect(mapStateToProps)(SortableComponent);
