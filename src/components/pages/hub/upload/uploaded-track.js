import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import * as actions from '../../../../actions/hub/uploaded-track-actions';

const DragHandle = SortableHandle(() => {
  return <span><Icon name="bars" size="lg" className="drag-handle" /></span>;
});

class UploadedTrack extends Component {
  handleInputChange(e) {
    const { track } = this.props;
    this.props.updateTrackName(e.target.value, track.trackId);
  }

  render() {
    const { track } = this.props;
    console.log(track);
    return (
      <li key={`track-${track.trackId}`}>
        {track.playlistPosition}
        <DragHandle />
        <input
          type="text"
          onChange={this.handleInputChange.bind(this)}
          value={track.name}
        />
        {track.progress}
      </li>
    );
  }
}

export default connect(null, actions)(SortableElement(UploadedTrack));
