import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/hub/uploaded-track-actions';

class UploadedTrack extends Component {
  render() {
    console.log(this.props.updateTrackName('Hello'));
    return (
      <li>
        <input type="text" />
      </li>
    );
  }
}

export default connect(null, actions)(UploadedTrack);
