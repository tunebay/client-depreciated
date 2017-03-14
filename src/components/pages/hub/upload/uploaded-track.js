import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/hub/uploaded-track-actions';

class UploadedTrack extends Component {
  handleInputChange(e) {
    console.log(e.target.value);
    this.props.updateTrackName(e.target.value, this.props.track.trackId);
  }

  render() {
    console.log(this.props);
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

export default connect(null, actions)(UploadedTrack);
