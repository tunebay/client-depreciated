import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => <span>::</span>);

const UploadedTrack = SortableElement((props) => {
  return (
    <li>
      <DragHandle />
      {props.value}
    </li>
  );
});

export default UploadedTrack;

// props.progress
// props.name
// props.playlistPosition
