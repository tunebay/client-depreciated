import React, { Component } from 'react';
import { connect } from 'react-redux';

class UploadedTrack extends Component {
  render() {
    return (
      <div>{this.props.track.name}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    track: state.uploadedTrack
  };
};

export default connect(mapStateToProps)(UploadedTrack);
