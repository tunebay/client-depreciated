import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../actions/hub/upload-actions';

class Upload extends Component {
  onDrop(files, rejectedFiles) {
    this.props.uploadAudioToS3(files);
    console.log('Rejected:', rejectedFiles);
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
        <div>{this.props.progress}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ upload }) => {
  return {
    progress: upload.percentCompleted,
    uploadComplete: upload.uploadComplete
  };
};

export default connect(mapStateToProps, actions)(Upload);
