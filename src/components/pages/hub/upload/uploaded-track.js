import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/hub/uploaded-track-actions';

class UploadedTrack extends Component {
  render() {
    return (
      <li>
        <div> { this.props.track.name } </div>
      </li>
    );
  }
}

export default connect(null, actions)(UploadedTrack);
