import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import '../../../../styles/components/hub/uploaded-track.scss';

const DragHandle = SortableHandle(() => <span>::</span>);

const UploadedTrack = SortableElement((props) => {
  return (
    <li className="uploaded-track">
      <DragHandle />
      {props.value}
    </li>
  );
});

export default UploadedTrack;

// props.progress
// props.name
// props.playlistPosition
