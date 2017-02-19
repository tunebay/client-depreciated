import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove
} from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => <span>::</span>);

const UploadedTrack = SortableElement(({ value }) => {
  console.log(value);
  return (
    <li>
      <DragHandle />
      {value}
    </li>
  );
});

const TrackList = SortableContainer(({ tracks }) => {
  console.log('SortableContainer:', tracks);
  return (
    <ul>
      {tracks.map((track, index) => {
        console.log('Track Name:', track.name);
        return <UploadedTrack key={`item-${index}`} index={index} value={track.name} />
      }
      )}
    </ul>
  );
});

class UploadTracklist extends Component {
  onSortEnd({ oldIndex, newIndex }) {
    const { tracks } = this.state;

    this.setState({
      tracks: arrayMove(tracks, oldIndex, newIndex)
    });
  }

  render() {
    return (
      <TrackList tracks={this.props.tracks} onSortEnd={this.onSortEnd} useDragHandle />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.upload.tracks
  };
};

export default connect(mapStateToProps)(UploadTracklist);
