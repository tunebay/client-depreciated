import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/hub/uploaded-track-actions';

class UploadedTrack extends Component {
  render() {
    console.log('track props', this.props);
    return (
      <li>
        <div>Track name: </div>
      </li>
    );
  }
}

export default connect(null, actions)(UploadedTrack);
