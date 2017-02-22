import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => <span>::</span>);

const UploadedTrack = SortableElement(({ value }) => {
  return (
    <li>
      <DragHandle />
      {value}
    </li>
  );
});

export default UploadedTrack;
