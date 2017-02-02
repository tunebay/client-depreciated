import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../actions/hub/upload-actions';
// import ReactS3Uploader from 'react-s3-uploader';

class Upload extends Component {
  onDrop(files) {
    this.props.uploadAudioToS3(files);
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop.bind(this)}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <div>{this.props.progress}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    progress: state.upload.percentCompleted
  };
};

export default connect(mapStateToProps, actions)(Upload);
