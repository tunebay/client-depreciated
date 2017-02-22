import React, { Component } from 'react';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import UploadedTrack from './uploaded-track';

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) =>
        <UploadedTrack key={`item-${index}`} index={index} value={value} />
      )}
    </ul>
  );
});

class SortableComponent extends Component {
  componentWillMount() {
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
    };
    console.log(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    const { items } = this.state;

    this.setState({
      items: arrayMove(items, oldIndex, newIndex)
    });
  }

  render() {
    const { items } = this.state;

    return (
      <SortableList items={items} onSortEnd={this.onSortEnd.bind(this)} useDragHandle />
    );
  }
}

export default SortableComponent;
