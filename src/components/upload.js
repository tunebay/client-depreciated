import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../actions/hub/upload-actions';

class Upload extends Component {
  onDrop(files, rejectedFiles) {
    this.props.uploadAudioToS3(files, this.props.userId);
    console.log('Rejected:', rejectedFiles);
  }

  renderAudio() {
    if (this.props.uploadComplete) {
      return <div>Upload complete!</div>;
    }
    return <div>{this.props.progress}</div>;
  }

  render() {
    return (
      <div>
        <Dropzone
          onDrop={this.onDrop.bind(this)}
          accept={'audio/*'}
          maxSize={1000000000} // 1gb
        >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        {this.renderAudio()}
      </div>
    );
  }
}

const mapStateToProps = ({ upload, currentUser }) => {
  return {
    progress: upload.percentCompleted,
    uploadComplete: upload.uploadComplete,
    userId: currentUser.id
  };
};

export default connect(mapStateToProps, actions)(Upload);
