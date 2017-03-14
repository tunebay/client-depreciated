import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import * as actions from '../../../../actions/hub/uploaded-track-actions';

class UploadedTrack extends Component {
  handleInputChange(e) {
    this.props.updateTrackName(e.target.value, this.props.track.trackId);
  }

  render() {
    return (
      <li key={`track-${this.props.track.trackId}`}>
        <input
          type="text"
          onChange={this.handleInputChange.bind(this)}
          value={this.props.track.name}
        />
      </li>
    );
  }
}

export default connect(null, actions)(SortableElement(UploadedTrack));
