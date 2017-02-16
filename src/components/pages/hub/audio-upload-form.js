import React, { Component } from 'react';

class AudioUploadForm extends Component {
  render() {
    return (
      <div className="audio-upload-form-con">
        <form action="">
          <div>Im a form that knows the upload percentage: {this.props.uploadProgress}</div>
        </form>
      </div>
    );
  }
}

export default AudioUploadForm;
