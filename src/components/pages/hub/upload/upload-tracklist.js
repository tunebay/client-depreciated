import React, { Component } from 'react';
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
  return (
    <ul>
      {tracks.map((value, index) =>
        <UploadedTrack key={`item-${index}`} index={index} value={value} />
      )}
    </ul>
  );
});

class UploadTracklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: ['wait what', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    };
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
      <TrackList tracks={tracks} onSortEnd={this.onSortEnd} useDragHandle />
    );
  }
}

export default UploadTracklist;
